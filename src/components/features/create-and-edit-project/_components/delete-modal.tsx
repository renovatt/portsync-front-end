'use lcient'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { deleteProject } from '../actions/delete-action.service'
import { LoaderCircle, Trash2 } from 'lucide-react'

type DeleteModalProps = {
  projectId: string
}

export function DeleteModal({ projectId }: DeleteModalProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDeleteProject = async () => {
    setIsLoading(true)
    const data = await deleteProject(projectId)

    if (!data.ok) {
      toast({
        title: 'Ops!',
        description: 'Não foi possível excluir o projeto',
      })
      setIsLoading(false)
      return
    }

    setIsLoading(false)

    toast({
      title: 'Yeah!',
      description: 'Projeto excluído com sucesso',
    })
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => setIsModalOpen(open)}>
      <DialogTrigger asChild onClick={() => setIsModalOpen(true)}>
        <Trash2 className="size-5 cursor-pointer text-gray-400 transition-all hover:text-destructive" />
      </DialogTrigger>
      <DialogContent className="py-5">
        <DialogHeader>
          <DialogTitle>Exlcuir projeto</DialogTitle>
          <DialogDescription>
            Você tem certeza que deseja excluir este projeto?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteProject}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <LoaderCircle className="animate-spin" />
                  Excluindo...
                </span>
              ) : (
                <span>Excluir</span>
              )}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
