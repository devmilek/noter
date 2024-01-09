import { Trash } from 'lucide-react'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <Trash className="h-4 w-4 text-zinc-300" />
    </ActionButton>
  )
}
