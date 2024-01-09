import { deleteNoteAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { Trash } from 'lucide-react'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)
  const handleDelete = () => {
    deleteNote()
  }
  return (
    <ActionButton onClick={handleDelete} {...props}>
      <Trash className="h-4 w-4 text-zinc-300" />
    </ActionButton>
  )
}
