import {useNavigate} from '@github-ui/use-navigate'
import {PencilIcon} from '@primer/octicons-react'
import {IconButton} from '@primer/react'

import {useShortcut} from '../../../hooks/shortcuts'

export function EditButton({
  editPath,
  editTooltip,
  customSx,
}: {
  editPath?: string
  editTooltip: string
  customSx?: Record<string, unknown>
}): JSX.Element | null {
  const {editFileShortcut} = useShortcut()
  const navigate = useNavigate()

  if (!editPath) return null

  return (
    <IconButton
      icon={PencilIcon}
      sx={{
        ...customSx,
      }}
      aria-label={editTooltip}
      onClick={() => {
        navigate(editPath)
      }}
      data-hotkey={editFileShortcut.hotkey}
      size="small"
      title={editTooltip}
      variant="invisible"
    />
  )
}

try{ EditButton.displayName ||= 'EditButton' } catch {}