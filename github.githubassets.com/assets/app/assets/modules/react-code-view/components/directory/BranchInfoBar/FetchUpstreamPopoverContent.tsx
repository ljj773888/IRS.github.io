import type {RefComparison} from '@github-ui/code-view-types'
import {useCurrentRepository} from '@github-ui/current-repository'
import {comparePath} from '@github-ui/paths'
import {CheckIcon, GitMergeIcon} from '@primer/octicons-react'
import {BranchName, Button, Link, Text} from '@primer/react'

import {useReposAppPayload} from '../../../hooks/FilesPageInfo'
import {useDisabledWithLabel} from '../../../hooks/use-disabled-with-label'
import {useReposAnalytics} from '../../../hooks/use-repos-analytics'
import {linkButtonSx} from '../../../utilities/styles'
import {syncForkButtonEventPayload} from './generate-button-event-payload'
import {getCommitsCountText} from './get-commits-count-text'
import {PopoverActions, PopoverContent, PopoverIcon} from './InfobarPopover'

interface Props {
  comparison: RefComparison
  discard: () => Promise<void>
  update: () => Promise<void>
}

export function FetchUpstreamPopoverContent({comparison, discard, update}: Props) {
  const repo = useCurrentRepository()
  const {helpUrl} = useReposAppPayload()
  const {sendRepoClickEvent} = useReposAnalytics()

  const syncingForkHelpUrl = `${helpUrl}/github/collaborating-with-issues-and-pull-requests/syncing-a-fork`

  const compareBranchesPath = comparePath({repo, base: comparison.baseBranchRange, head: comparison.currentRef})
  const comparisonState = getComparisonState(comparison)

  const isBehind = comparison.behind > 0

  const discardButton = useDisabledWithLabel(
    `Discard ${getCommitsCountText(comparison.ahead)}`,
    'Discarding changes...',
    discard,
  )

  const updateButton = useDisabledWithLabel('Update branch', 'Updating...', update)

  const visible = {
    compare: comparisonState === 'behind',
    discard: comparisonState === 'behind-and-ahead' && comparison.isTrackingBranch,
    update: ['behind', 'behind-and-ahead'].includes(comparisonState),
  }
  const hasVisibleActions = Object.values(visible).some(Boolean)

  return (
    <>
      <PopoverContent
        icon={
          <PopoverIcon
            icon={isBehind ? GitMergeIcon : CheckIcon}
            bg={isBehind ? 'neutral.emphasis' : 'success.emphasis'}
          />
        }
        header={<HeaderText comparison={comparison} />}
        content={<ContentText comparison={comparison} helpUrl={syncingForkHelpUrl} />}
      />
      {hasVisibleActions && (
        <PopoverActions>
          {visible.compare && (
            <Button
              as={Link}
              sx={{flex: 1, ...linkButtonSx}}
              href={compareBranchesPath}
              onClick={() =>
                sendRepoClickEvent('SYNC_FORK.COMPARE', {...syncForkButtonEventPayload, action: 'Compare'})
              }
              data-testid="compare-button"
            >
              Compare
            </Button>
          )}
          {visible.discard && (
            <Button
              onClick={discardButton.action}
              sx={{flex: 1}}
              data-testid="discard-button"
              variant="danger"
              disabled={discardButton.disabled}
            >
              {discardButton.label}
            </Button>
          )}
          {visible.update && (
            <Button
              onClick={updateButton.action}
              disabled={updateButton.disabled}
              sx={{flex: 1}}
              variant="primary"
              data-testid="update-branch-button"
            >
              {updateButton.label}
            </Button>
          )}
        </PopoverActions>
      )}
    </>
  )
}

type ComparisonState = 'sync' | 'behind' | 'ahead' | 'behind-and-ahead'

function getComparisonState({behind, ahead}: RefComparison): ComparisonState {
  if (behind === 0 && ahead === 0) return 'sync'
  if (behind > 0 && ahead > 0) return 'behind-and-ahead'
  if (behind > 0) return 'behind'
  return 'ahead'
}

function HeaderText({comparison}: {comparison: RefComparison}) {
  const comparisonState = getComparisonState(comparison)

  switch (comparisonState) {
    case 'behind':
    case 'behind-and-ahead':
      return <Text>This branch is out-of-date</Text>
    default:
      return (
        <Text>
          This branch is not behind the upstream <BranchName as="span">{comparison.baseBranch}</BranchName>.
        </Text>
      )
  }
}

function ContentText({comparison, helpUrl}: {comparison: RefComparison; helpUrl: string}) {
  const comparisonState = getComparisonState(comparison)

  switch (comparisonState) {
    case 'sync':
    case 'ahead':
      return <Text as="p">No new commits to fetch. Enjoy your day!</Text>
    case 'behind':
      return (
        <>
          <Text as="p">
            Update branch to keep this branch up-to-date by syncing {getCommitsCountText(comparison.behind)} from the
            upstream repository.
          </Text>
          <Text as="p">
            <Link href={helpUrl} target="_blank" rel="noopener noreferrer">
              Learn more about syncing a fork
            </Link>
          </Text>
        </>
      )
    case 'behind-and-ahead':
      return comparison.isTrackingBranch ? (
        <>
          <Text as="p">Update branch to merge the latest changes from the upstream repository into this branch.</Text>
          <Text as="p">
            Discard {getCommitsCountText(comparison.ahead)} to make this branch match the upstream repository.{' '}
            {getCommitsCountText(comparison.ahead)} will be removed from this branch.
          </Text>
          <Text as="p">
            <Link href={helpUrl} target="_blank" rel="noopener noreferrer">
              Learn more about syncing a fork
            </Link>
          </Text>
        </>
      ) : (
        <Text as="p">Update branch to merge the latest changes from the upstream repository into this branch.</Text>
      )
  }
}

try{ FetchUpstreamPopoverContent.displayName ||= 'FetchUpstreamPopoverContent' } catch {}
try{ HeaderText.displayName ||= 'HeaderText' } catch {}
try{ ContentText.displayName ||= 'ContentText' } catch {}