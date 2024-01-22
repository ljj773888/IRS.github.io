import type {QueryEvent, SearchProvider, SearchScopeText} from '@github-ui/query-builder-element/query-builder-api'
import {FetchDataEvent, Octicon, SearchItem} from '@github-ui/query-builder-element/query-builder-api'
import type {QueryBuilderElement} from '@github-ui/query-builder-element'
import type {ParsedIntermediateRepresentation} from '../qbsearch-input-element'
import type {TextNode, QualifierNode, NodeWithChildren, ContentNode} from '@github/blackbird-parser'
import {CaretPositionKind, extractRepoOrgScopes, hasChildren, isQualifier} from '../parsing/common'
// eslint-disable-next-line import/no-namespace
import type * as Parsing from '../parsing/parsing'

enum IndexingStatus {
  INDEXING = 'indexing',
  INDEXED = 'indexed',
  NOTINDEXED = 'notindexed',
  UNKNOWN = 'unknown',
}

export class InputProvider extends EventTarget implements SearchProvider {
  priority = 0
  name = ''
  singularItemName = 'search'
  value = 'search'
  type = 'search' as const
  copilotChatEnabled: boolean = false
  #input: HTMLElement
  #cache: Record<string, IndexingStatus> = {}
  #parser: typeof Parsing | undefined

  constructor(
    public queryBuilder: QueryBuilderElement,
    input: HTMLElement,
    copilotChatEnabled: boolean,
  ) {
    super()
    this.queryBuilder.addEventListener('query', this)
    this.#input = input
    this.copilotChatEnabled = copilotChatEnabled
    if (copilotChatEnabled) {
      this.fetchInitialRepoIndexingStatus()
    }
  }

  async fetchInitialRepoIndexingStatus(): Promise<void> {
    const repo = this.#input.getAttribute('data-current-repository')
    const token = this.#input.getAttribute('data-blackbird-indexed-repo-csrf')
    if (repo && token) {
      const fetchUrl = new URL(`/search/check_indexing_status?nwo=${encodeURIComponent(repo)}`, window.location.origin)
      const indexedResponse = await fetch(fetchUrl.href, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          Accept: 'application/json',
          'Scoped-CSRF-Token': token,
          'X-Requested-With': 'XMLHttpRequest',
        },
      })

      if (indexedResponse.ok) {
        const jsonResponse = await indexedResponse.json()
        const status = jsonResponse.code_status
        if (status !== IndexingStatus.INDEXING) {
          this.#cache[repo] = status
        }
      }
    }
  }

  async handleEvent(event: QueryEvent) {
    const state = event.parsedMetadata as ParsedIntermediateRepresentation | undefined

    if (event.rawQuery) {
      // Always emit a fallback suggestion, if no other suggestions exist
      this.dispatchEvent(
        new SearchItem({
          value: event.rawQuery,
          scope: 'GITHUB',
          icon: Octicon.Search,
          priority: 0,
          action: {
            query: event.rawQuery,
          },
          isFallbackSuggestion: true,
        }),
      )
    }

    if (!state || state.caretPositionKind !== CaretPositionKind.Text) {
      return []
    }

    let trimmedQuery = state.query.trim()

    let repo = this.#input.getAttribute('data-current-repository')
    let org = this.#input.getAttribute('data-current-org')
    let orgNode: QualifierNode | undefined = undefined
    let user = this.#input.getAttribute('data-current-owner')

    if (!this.#parser) {
      this.#parser = await import('../parsing/parsing')
    }

    // Use query to extract the current qualifier for suggestions
    const astNode: NodeWithChildren = this.#parser.parseString(trimmedQuery || '') as NodeWithChildren

    // No qualifiers found
    if (astNode.children) {
      const qualifierNodes = astNode.children.filter(node => node.kind === 'Qualifier') as QualifierNode[]
      repo = (qualifierNodes.find(node => node.qualifier === 'Repo')?.content as ContentNode)?.value?.toString() || repo
      orgNode = qualifierNodes.find(node => node.qualifier === 'Org')
      org = (orgNode?.content as ContentNode)?.value?.toString() || org
      user =
        (
          qualifierNodes.find(node => node.qualifier === 'Org' && node.raw === 'user:')?.content as ContentNode
        )?.value?.toString() || user
      // Get owner from nwo
      if (repo && !orgNode) {
        org = repo.split('/')[0]!
      }
    }

    interface Suggestion {
      query: string
      scope?: keyof typeof SearchScopeText
    }
    const suggestions: Suggestion[] = []
    let containsScopes = false

    if (state.ast) {
      const node = state.ast

      // check if node has query text attached to it (not just qualifier)
      if (hasChildren(node)) {
        trimmedQuery = (node.children.filter(item => item.kind === 'Text') as TextNode[])
          .map(item => item.value)
          .join(' ')

        const scopes = extractRepoOrgScopes(node)
        // If the scopes contains a saved scope, don't generate input suggestions,
        // since we can't generate sensible parent scopes.
        if (scopes.find(s => s.kind === 'saved')) {
          return []
        }

        // If text has a repo or org qualifier within it, show just query text at the bottom of input
        if (scopes.length) {
          containsScopes = true
        }
      } else if (isQualifier(node)) {
        // if node is only a qualifier, don't include it as part of query text
        trimmedQuery = ''
      }

      if (repo && repo.length > 0) {
        suggestions.push({
          query: `repo:${repo} ${trimmedQuery}`,
          scope: 'REPO',
        })
      }
      if (orgNode) {
        suggestions.push({
          query: `${orgNode.raw}${org} ${trimmedQuery}`,
          scope: 'ORG',
        })
      } else {
        if (org && org.length > 0) {
          suggestions.push({
            query: `org:${org} ${trimmedQuery}`,
            scope: 'ORG',
          })
        }
        if (user && user.length > 0) {
          suggestions.push({
            query: `user:${user} ${trimmedQuery}`,
            scope: 'OWNER',
          })
        }
      }
    }

    if (trimmedQuery.length > 0) {
      !containsScopes
        ? suggestions.unshift({
            query: trimmedQuery,
            scope: 'GITHUB',
          })
        : suggestions.push({query: trimmedQuery, scope: 'GITHUB'})
    }

    const token = this.#input.getAttribute('data-blackbird-indexed-repo-csrf')
    const shouldShowCopilotSuggestion =
      repo !== null && repo.length > 0 && trimmedQuery.length > 0 && this.copilotChatEnabled && token !== undefined

    // If we are currently on a non-root tree view page, offer to search within
    // the current directory.
    const path = getPathQualifier(window.location.pathname)
    if (path) {
      const query = `repo:${repo} path:${path} ${trimmedQuery}`
      this.dispatchEvent(
        new SearchItem({
          value: query,
          scope: 'DIRECTORY',
          icon: Octicon.Search,
          priority: 0,
          action: {
            commandName: 'blackbird-monolith.search',
            data: {
              query,
            },
          },
        }),
      )
    }

    // If we are going to show the copilot suggestion, let's not show the first suggestion (repo scoped search)
    for (const suggestion of suggestions.slice(shouldShowCopilotSuggestion ? 1 : 0, 3)) {
      this.dispatchEvent(
        new SearchItem({
          value: suggestion.query,
          scope: suggestion.scope,
          icon: Octicon.Search,
          priority: 0,
          action: {
            commandName: 'blackbird-monolith.search',
            data: {
              query: suggestion.query,
            },
          },
        }),
      )
    }

    if (shouldShowCopilotSuggestion && token) {
      const fetchUrl = new URL(`/search/check_indexing_status?nwo=${encodeURIComponent(repo!)}`, window.location.origin)
      let status: IndexingStatus = this.#cache[repo!] ?? IndexingStatus.UNKNOWN
      if (status === IndexingStatus.UNKNOWN) {
        const indexedResponsePromise = fetch(fetchUrl.href, {
          method: 'GET',
          mode: 'same-origin',
          headers: {
            Accept: 'application/json',
            'Scoped-CSRF-Token': token,
            'X-Requested-With': 'XMLHttpRequest',
          },
        })

        this.dispatchEvent(new FetchDataEvent(indexedResponsePromise))
        const indexedResponse = await indexedResponsePromise
        if (indexedResponse.ok) {
          const jsonResponse = await indexedResponse.json()
          status = jsonResponse.code_status
          if (status !== IndexingStatus.INDEXING) {
            this.#cache[repo!] = status
          }
        }
      }

      if (status === IndexingStatus.INDEXED) {
        this.dispatchEvent(
          new SearchItem({
            value: `repo:${repo} ${trimmedQuery}`,
            scope: 'COPILOT',
            icon: Octicon.Copilot,
            priority: 0,
            action: {
              commandName: 'search-copilot-chat',
              data: {
                content: trimmedQuery,
                repoNwo: repo,
              },
            },
          }),
        )
      }
    }
  }

  getQualifierType(input: string): string {
    if (input.includes('repo')) {
      // eslint-disable-next-line i18n-text/no-en
      return 'In this repository'
    } else if (input.includes('org')) {
      // eslint-disable-next-line i18n-text/no-en
      return 'In this organization'
    } else if (input.includes('user')) {
      // eslint-disable-next-line i18n-text/no-en
      return 'In this user'
    } else if (input.includes('owner')) {
      // eslint-disable-next-line i18n-text/no-en
      return 'In this owner'
    } else {
      // eslint-disable-next-line i18n-text/no-en
      return 'All of GitHub'
    }
  }
}

function buildRegexQuery(path: string): string {
  // Decode any URL characters
  path = decodeURIComponent(path)

  // Strip trailing slash
  if (path.endsWith('/')) {
    path = path.substring(0, path.length - 1)
  }

  // Escape regex chars
  const escaped = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  // Build path regex query
  return `/^${escaped.replaceAll('/', '\\/')}\\//`
}

export function getPathQualifier(pathname: string): string | undefined {
  const treeRegex = /^\/[^/]+\/[^/]+\/tree\/[^/]+\/(.*)/

  const m = treeRegex.exec(pathname)
  if (m) {
    for (let i = 1; i < m.length; i++) {
      if (m[i]) {
        return buildRegexQuery(m[i]!)
      }
    }
  }

  return undefined
}
