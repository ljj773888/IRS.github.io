import {useCurrentRepository} from '@github-ui/current-repository'
import isHashNavigation from '@github-ui/is-hash-navigation'
import {SafeHTMLBox, type SafeHTMLString} from '@github-ui/safe-html'
import {useLayoutEffect} from '@github-ui/use-layout-effect'
import {useNavigate} from '@github-ui/use-navigate'
import type React from 'react'
import {useEffect, useRef} from 'react'
// eslint-disable-next-line no-restricted-imports
import {useLocation} from 'react-router-dom'

// eslint-disable-next-line no-restricted-imports
import {decodeFragmentValue, findElementByFragmentName} from '../../github/fragment-target'
import SelectAllShortcutButton from '../utilities/SelectAllShortcutButton'

interface MarkdownContentProps {
  onAnchorClick?: (event: React.MouseEvent) => void
  richText: SafeHTMLString
  stickyHeaderHeight?: number
  sx?: React.ComponentProps<typeof SafeHTMLBox>['sx']
}

export function MarkdownContent({onAnchorClick, richText, stickyHeaderHeight, sx}: MarkdownContentProps) {
  const {hash} = useLocation()
  const currentRepo = useCurrentRepository()
  const navigate = useNavigate()
  const markdownContainer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const hashChange = () => {
      onHashChange(window.location.hash, stickyHeaderHeight)
    }

    window.addEventListener('load', hashChange)
    window.addEventListener('hashchange', hashChange)
    return () => {
      window.removeEventListener('load', hashChange)
      window.removeEventListener('hashchange', hashChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useLayoutEffect(() => {
    if (markdownContainer.current) {
      onHashChange(window.location.hash, stickyHeaderHeight)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])

  return (
    <>
      <SafeHTMLBox
        ref={markdownContainer}
        className="js-snippet-clipboard-copy-unpositioned"
        html={richText}
        sx={sx}
        data-hpc
        onClick={event => {
          // don't soft navigate if the user cmd/ctrl + click
          // eslint-disable-next-line @github-ui/ui-commands/no-manual-shortcut-logic
          const isCmdClick = event.metaKey || event.ctrlKey
          const anchor = (event.target as HTMLElement).closest('a')
          if (anchor && anchor.href) {
            if (!isCmdClick) {
              const href = anchor.href
              const url = new URL(href, window.location.origin)

              if (isHashNavigation(window.location.href, href)) {
                onHashChange(url.hash, stickyHeaderHeight)
                if (window.location.hash === url.hash) {
                  event.preventDefault()
                }
              } else if (href.startsWith(`${window.location.origin}/${currentRepo.ownerLogin}/${currentRepo.name}/`)) {
                navigate(url.pathname + url.search + url.hash)
                event.preventDefault()
              }
            }
            onAnchorClick?.(event)
          }
        }}
      />
      <SelectAllShortcutButton containerRef={markdownContainer} />
    </>
  )
}

// 125px is the blob sticky header height
export function onHashChange(hash: string, stickyHeaderHeight: number = 125) {
  if (!hash) {
    return
  }

  const targetId = decodeFragmentValue(hash).toLowerCase()
  // a user can generate their own hash links that already include the prefix (typically for cross document links)
  // the majority of targetIds provided to the helper will exclude the prefix
  const normalizedTarget = targetId.startsWith('user-content-') ? targetId : `user-content-${targetId}`
  const target = findElementByFragmentName(document, normalizedTarget) as HTMLElement | null
  if (target && document && document.defaultView) {
    window.requestAnimationFrame(() => {
      const targetScroll =
        target.getBoundingClientRect().top - document.body.getBoundingClientRect().top - stickyHeaderHeight
      window.scrollTo({top: targetScroll})
      const focusElement = target.closest<HTMLElement>('h1,h2,h3,h4,h5,h6,li,span')
      if (focusElement) {
        focusElement.focus()
        // Set this attribute so soft-navs will autofocus
        focusElement.setAttribute('data-react-autofocus', 'true')
      }
    })
  }
}

try{ MarkdownContent.displayName ||= 'MarkdownContent' } catch {}