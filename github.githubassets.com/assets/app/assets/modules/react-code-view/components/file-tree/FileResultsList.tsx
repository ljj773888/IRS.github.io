import {useCurrentRepository} from '@github-ui/current-repository'
import {getScrollableParent} from '@github-ui/get-scrollable-parent'
import {codeNavSearchPath} from '@github-ui/paths'
import {Link} from '@github-ui/react-core/link'
import {ScreenSize, useScreenSize} from '@github-ui/screen-size'
import {useNavigate} from '@github-ui/use-navigate'
import {FocusKeys, scrollIntoView} from '@primer/behaviors'
import {FileDirectoryFillIcon, FileIcon} from '@primer/octicons-react'
import {
  ActionList,
  AnchoredOverlay,
  Box,
  Flash,
  Link as PrimerLink,
  Octicon,
  Spinner,
  type SxProp,
  Text,
  useFocusZone,
} from '@primer/react'
import {positions} from 'fzy.js'
import React from 'react'

import {WebWorker} from '../../../react-shared/Repos/WebWorker'
import {useFileQueryContext} from '../../contexts/FileQueryContext'
import {useFilesPageInfo, useReposAppPayload} from '../../hooks/FilesPageInfo'
import {useReposAnalytics} from '../../hooks/use-repos-analytics'
import {useUrlCreator} from '../../hooks/use-url-creator'
import {findFileWorkerJob} from '../../worker-jobs/find-file'
import {FilesSearchBox, isSearchUrl} from './FilesSearchBox'
import {useTreeList} from './use-tree-list'

const LIST_SIZE = 40

type FileResultsListProps = {
  onRenderRow?(): void
  onItemSelected?: () => void
  searchBoxRef?: React.RefObject<HTMLInputElement>
  isOverview?: boolean
  useOverlay?: boolean
  onFindFilesShortcut?: () => void
} & SxProp

export default function FileResultsList({
  onRenderRow,
  onItemSelected,
  searchBoxRef,
  isOverview,
  onFindFilesShortcut,
  sx = {},
  ...rest
}: FileResultsListProps) {
  const {query, setQuery} = useFileQueryContext()
  const repo = useCurrentRepository()
  const internalInputRef = React.useRef<HTMLInputElement>(null)
  const inputRef = searchBoxRef ?? internalInputRef
  // Mount results component early to start fetching search paths before user starts typing
  // for a more responsive experience.
  const [preloadSearch, setPreloadSearch] = React.useState(false || query.length > 0)
  const [overlayOpen, setOverlayOpen] = React.useState(!!query)
  const {list, directories, loading, error} = useTreeList(preloadSearch)
  const {path} = useFilesPageInfo()
  const {findFileWorkerPath} = useReposAppPayload()
  const {getUrl} = useUrlCreator()
  const {queryText, queryLine} = parseQuery(query)
  const {matches, clearMatches} = useFilter(list, queryText, findFileWorkerPath, preloadSearch)
  const {sendRepoClickEvent} = useReposAnalytics()
  const navigate = useNavigate()
  const [focusedSearchIndex, setFocusedSearchIndex] = React.useState<number>(0)
  const [listFocusVisible, setListFocusVisible] = React.useState(isSearchUrl())
  const allResultsLink = React.useRef<HTMLAnchorElement>(null)
  const textInputContainerRef = React.useRef<HTMLDivElement>(null)
  const overlayId = 'file-results-list'
  const {sendRepoKeyDownEvent} = useReposAnalytics()

  // This is SSR safe because we will wrap calls to FileResultsList with `lazy`
  const {screenSize} = useScreenSize()
  const useOverlay = rest.useOverlay || screenSize >= ScreenSize.large

  const onRowClick = React.useCallback(() => {
    sendRepoClickEvent('FILE_TREE.SEARCH_RESULT_CLICK')
    onItemSelected?.()
    setOverlayOpen(false)
  }, [sendRepoClickEvent, onItemSelected])

  const {containerRef: listRef} = useFocusZone(
    {
      bindKeys: FocusKeys.ArrowVertical | FocusKeys.HomeAndEnd,
      focusInStrategy: 'previous',
    },
    [loading, error],
  )

  React.useEffect(() => {
    if (!query) {
      setOverlayOpen(false)
    }
  }, [query])

  React.useEffect(() => {
    if (document.activeElement !== inputRef.current && useOverlay) {
      setOverlayOpen(false)
    }
  }, [path, inputRef, useOverlay])

  const displayMatches = matches?.slice(0, LIST_SIZE) || []

  const matchesTruncated = matches && matches.length > displayMatches.length

  const handleSearchBoxKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const {key, shiftKey, metaKey, altKey, ctrlKey} = event
    if (shiftKey || metaKey || altKey) return

    if (key === 'Escape') {
      if (query) {
        sendRepoKeyDownEvent('FILE_TREE.CANCEL_SEARCH')
        setQuery('')
        clearMatches()
      } else if (document.activeElement) {
        // eslint-disable-next-line github/no-blur
        ;(document.activeElement as HTMLInputElement).blur()
      }
    } else if (!query) {
      return
    } else if (key === 'Enter') {
      if (matchesTruncated && focusedSearchIndex === displayMatches.length) {
        navigate(
          codeNavSearchPath({
            owner: repo.ownerLogin,
            repo: repo.name,
            searchTerm: `path:${queryText}`,
          }),
        )
      } else if (displayMatches[focusedSearchIndex]) {
        navigate(
          getUrl({
            path: displayMatches[focusedSearchIndex],
            action: 'blob',
            hash: queryLine ? `L${queryLine}` : '',
          }),
        )
        setOverlayOpen(false)
      }
    } else if (key === 'ArrowDown' || (ctrlKey && key === 'n')) {
      // Move to the "See all results" link
      if (matchesTruncated && focusedSearchIndex >= displayMatches.length - 1) {
        setFocusedSearchIndex(displayMatches.length)
        if (allResultsLink.current && listRef.current) {
          const container = getScrollableParent(listRef.current)
          scrollIntoView(allResultsLink.current, container as HTMLElement, {behavior: 'instant'})
        }
      } else {
        setFocusedSearchIndex(Math.min(focusedSearchIndex + 1, displayMatches.length - 1))
      }

      event.preventDefault()
      return
    } else if (key === 'ArrowUp' || (ctrlKey && key === 'p')) {
      setFocusedSearchIndex(Math.max(focusedSearchIndex - 1, 0))
      event.preventDefault()
      return
    }
  }

  const listContents = (
    <Box
      sx={{
        maxHeight: useOverlay ? '60vh' : '100% !important',
        overflowY: 'auto',
        scrollbarGutter: 'stable',
        maxWidth: '100vw',
        '@media (max-width: 768px)': {
          ml: 3,
          mr: 2,
        },
      }}
    >
      {error ? (
        <Flash variant="danger" sx={{m: 3}}>
          Failed to search
        </Flash>
      ) : (
        <ActionList
          ref={listRef as React.RefObject<HTMLUListElement>}
          sx={{
            overflow: 'auto',
            p: useOverlay ? 2 : 3,
            pl: useOverlay ? 2 : isOverview ? 0 : 3,
            width: '100%',
            pr: useOverlay ? 3 : 0,
            pt: useOverlay ? 3 : '2px !important',
          }}
          role="listbox"
        >
          {!loading &&
            displayMatches.map((match, index) => {
              const isDirectory = directories.includes(match)
              return (
                <MemoizedFileResultRow
                  active={match === path}
                  index={index}
                  key={match}
                  focused={listFocusVisible && focusedSearchIndex === index}
                  match={match}
                  onRender={onRenderRow}
                  query={queryText}
                  onClick={onRowClick}
                  isDirectory={isDirectory}
                  to={getUrl({
                    path: match,
                    action: isDirectory ? 'tree' : 'blob',
                    hash: queryLine ? `L${queryLine}` : '',
                  })}
                  useOverlay={useOverlay}
                  listRef={listRef}
                />
              )
            })}

          <Box sx={{m: 3, textAlign: 'center'}}>
            <FileResultsStatus
              loading={loading || !matches}
              visibleResultCount={displayMatches.length}
              truncated={!!matchesTruncated}
            />
            {matchesTruncated && (
              <>
                &nbsp;
                <PrimerLink
                  id="see-all-results-link"
                  className="focus-visible"
                  ref={allResultsLink}
                  href={codeNavSearchPath({
                    owner: repo.ownerLogin,
                    repo: repo.name,
                    searchTerm: `path:${queryText}`,
                  })}
                  sx={
                    listFocusVisible && focusedSearchIndex === displayMatches.length
                      ? {
                          outline: '2px solid var(--focus-outlineColor, var(--color-accent-fg))',
                          outlineOffset: '-2px',
                          boxShadow: 'none',
                        }
                      : {}
                  }
                >
                  See all results
                </PrimerLink>
              </>
            )}
          </Box>
        </ActionList>
      )}
    </Box>
  )

  return (
    <>
      <Box ref={textInputContainerRef} sx={{mx: 2, ml: isOverview ? 0 : 3, ...sx}}>
        <FilesSearchBox
          ariaActiveDescendant={
            (useOverlay || !query) && (!useOverlay || !overlayOpen)
              ? undefined
              : listFocusVisible && focusedSearchIndex > -1
                ? matchesTruncated && focusedSearchIndex === displayMatches.length
                  ? 'see-all-results-link'
                  : `file-result-${focusedSearchIndex}`
                : undefined
          }
          ariaExpanded={useOverlay ? overlayOpen : undefined}
          ariaHasPopup={useOverlay}
          ariaControls={useOverlay ? overlayId : undefined}
          ref={inputRef}
          query={query}
          onKeyDown={handleSearchBoxKeyDown}
          onPreload={() => setPreloadSearch(true)}
          onSearch={newQuery => {
            setQuery(newQuery)
            if (newQuery) {
              setOverlayOpen(true)
            } else {
              clearMatches()
              setOverlayOpen(false)
            }
            setFocusedSearchIndex(0)
          }}
          onBlur={e => {
            if (!listRef.current?.contains(e.relatedTarget)) {
              setOverlayOpen(false)
              setListFocusVisible(false)
            }
          }}
          onFocus={() => {
            if (query) {
              setOverlayOpen(true)
            }
            setListFocusVisible(true)
          }}
          onFindFilesShortcut={onFindFilesShortcut}
          sx={{minWidth: '160px'}}
        />
      </Box>
      {useOverlay && (
        <AnchoredOverlay
          anchorRef={textInputContainerRef}
          open={useOverlay && overlayOpen}
          renderAnchor={null}
          onClose={() => {
            setOverlayOpen(false)
          }}
          focusZoneSettings={{disabled: true}}
          focusTrapSettings={{disabled: true}}
          width="xlarge"
          align="end"
          overlayProps={{id: overlayId, role: 'dialog'}}
        >
          {listContents}
        </AnchoredOverlay>
      )}
      {!useOverlay && query && listContents}
    </>
  )
}

interface FileResultStatusProps {
  visibleResultCount: number
  truncated: boolean
  loading: boolean
}

function FileResultsStatus({visibleResultCount, truncated, loading}: FileResultStatusProps) {
  const screenReaderOnly = !loading && !truncated && visibleResultCount !== 0
  return (
    <span
      key="results-count-status"
      role="status"
      className={screenReaderOnly ? 'sr-only' : undefined}
      aria-label={loading ? 'Loading' : undefined}
    >
      {loading ? (
        <Spinner size="large" />
      ) : visibleResultCount === 0 ? (
        'No matches found'
      ) : truncated ? (
        `First ${visibleResultCount} files shown.`
      ) : (
        `Showing ${visibleResultCount} files.`
      )}
    </span>
  )
}

interface FileResultRowProps {
  active: boolean
  focused?: boolean
  index: number
  match: string
  isDirectory: boolean
  onClick?(): void
  query: string
  to: string
  onRender?(): void
  useOverlay: boolean
  listRef?: React.RefObject<HTMLElement>
}

export const FileResultRow = ({
  active,
  focused,
  index,
  match,
  query,
  to,
  isDirectory,
  onClick,
  onRender,
  useOverlay,
  listRef,
}: FileResultRowProps) => {
  const positionsList = positions(query, match)
  onRender?.()

  const ref = React.useRef<HTMLAnchorElement>(null)
  const leadingIcon = isDirectory ? DirectoryIcon : FileResultIcon

  React.useEffect(() => {
    if (focused && ref.current && listRef?.current) {
      const container = getScrollableParent(listRef.current)
      scrollIntoView(ref.current, container as HTMLElement, {behavior: 'instant'})
    }
  }, [focused, listRef])

  let sx = {}
  if (focused) {
    sx = {
      outline: 'none',
      border: '2 solid',
      boxShadow: '0 0 0 2px #0969da',
    }
  }

  return (
    <ActionList.Item
      key={match}
      id={`file-result-${index}`}
      ref={ref}
      as={Link}
      onClick={onClick}
      to={to}
      active={active}
      sx={{
        fontWeight: 'normal',
        ':hover': {
          textDecoration: 'none',
        },
        mx: '2px',
        width: 'calc(100% - 4px)',
        ...sx,
      }}
      role="option"
      data-focus-visible-added={focused || undefined}
      tabIndex={useOverlay ? -1 : 0}
    >
      <Box sx={{display: 'flex'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', overflow: 'hidden', flexGrow: 1}}>
          <HighlightMatch
            text={match}
            positionsList={positionsList}
            sx={{color: 'fg.muted'}}
            LeadingIcon={leadingIcon}
          />
        </Box>
        {focused && (
          <Box sx={{pl: 1, whiteSpace: 'nowrap', color: 'fg.muted'}}>{`Go to ${isDirectory ? 'folder' : 'file'}`}</Box>
        )}
      </Box>
    </ActionList.Item>
  )
}

const DirectoryIcon = () => (
  <Octicon
    aria-label="Directory"
    icon={FileDirectoryFillIcon}
    sx={{color: 'var(--color-icon-directory)', mr: 2}}
    size="small"
  />
)

const FileResultIcon = () => <Octicon aria-label="File" icon={FileIcon} sx={{color: 'fg.muted', mr: 2}} size="small" />

const MemoizedFileResultRow = React.memo(FileResultRow)

interface HighlightMatchProps extends SxProp {
  text: string
  positionsList: number[]
  offset?: number
  LeadingIcon?: React.ComponentType
}

function HighlightMatch({text, positionsList, sx, LeadingIcon}: HighlightMatchProps) {
  const parts = []
  let lastPosition = 0
  for (const i of positionsList) {
    if (Number(i) !== i || i < lastPosition || i > text.length) {
      continue
    }
    const slice = text.slice(lastPosition, i)
    if (slice) {
      parts.push(allowSlashWrapping(slice))
    }

    lastPosition = i + 1

    parts.push(
      <Text as="mark" key={i} sx={{fontWeight: 'bold', background: 'none', color: 'fg.default'}}>
        {text[i]}
      </Text>,
    )
  }

  parts.push(allowSlashWrapping(text.slice(lastPosition)))

  return (
    <Box sx={sx}>
      <>
        {LeadingIcon && <LeadingIcon />}
        {parts}
      </>
    </Box>
  )
}

function allowSlashWrapping(text: string): string {
  // Add a zero-width-space after each slash, so that the browser can wrap the text
  return text.replaceAll('/', '/\u200B')
}

export interface FindFileRequest {
  baseList: string[]
  query: string
  startTime: number
}

export interface FindFileResponse {
  query: string
  list: string[]
  baseCount: number
  startTime: number
}

function useFilter(list: string[], query: string, workerPath: string, startWorker: boolean) {
  const [matches, setMatches] = React.useState<string[]>()
  const lastQueryRef = React.useRef<string>('')
  const workerRef = React.useRef<WebWorker<FindFileRequest, FindFileResponse>>()
  const {sendStats} = useReposAnalytics()
  const isWorkerWorking = React.useRef(false)

  const createWorker = React.useCallback(() => {
    const worker = new WebWorker(workerPath, findFileWorkerJob)

    worker.onmessage = ({data}: {data: FindFileResponse}) => {
      isWorkerWorking.current = false
      setMatches(data.list)
      lastQueryRef.current = data.query

      if (data.startTime) {
        sendStats('repository.find-file', {
          'find-file-base-count': data.baseCount,
          'find-file-results-count': data.list.length,
          'find-file-duration-ms': performance.now() - data.startTime,
        })
      }
    }

    workerRef.current = worker
  }, [sendStats, workerPath])

  React.useEffect(() => {
    if (!startWorker) return
    createWorker()

    return function destroy() {
      workerRef.current?.terminate()
    }
  }, [createWorker, startWorker])

  React.useEffect(() => {
    if (list.length && query) {
      // If a worker is currently filtering and we get a new query,
      // don't wait for it to finish. Terminate the worker and start a new one.
      if (isWorkerWorking.current) {
        workerRef.current?.terminate()
        createWorker()
      }
      const canFilterPreviousMatches = lastQueryRef.current && query.startsWith(lastQueryRef.current)
      isWorkerWorking.current = true
      workerRef.current?.postMessage({
        baseList: (canFilterPreviousMatches && matches) || list,
        query,
        startTime: performance.now(),
      })
    }
    // We don't want to re-run this when `matches` change because we never have to filter again in that case
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, query, createWorker])

  return {matches, clearMatches: () => setMatches(undefined)}
}

function parseQuery(query: string) {
  query = query.replaceAll(' ', '')
  const colonIndex = query.indexOf(':')
  if (colonIndex >= 0) {
    return {
      queryText: query.substring(0, colonIndex),
      queryLine: parseInt(query.substring(colonIndex + 1), 10),
    }
  }
  return {queryText: query, queryLine: undefined}
}

try{ FileResultsList.displayName ||= 'FileResultsList' } catch {}
try{ FileResultsStatus.displayName ||= 'FileResultsStatus' } catch {}
try{ FileResultRow.displayName ||= 'FileResultRow' } catch {}
try{ DirectoryIcon.displayName ||= 'DirectoryIcon' } catch {}
try{ FileResultIcon.displayName ||= 'FileResultIcon' } catch {}
try{ MemoizedFileResultRow.displayName ||= 'MemoizedFileResultRow' } catch {}
try{ HighlightMatch.displayName ||= 'HighlightMatch' } catch {}