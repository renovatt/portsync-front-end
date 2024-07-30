'use client'
import { Button } from '@ui/button'
import { toast } from '@ui/use-toast'

import { useState } from 'react'
import { CircleAlert, LoaderCircle } from 'lucide-react'
import { Cross2Icon } from '@radix-ui/react-icons'
import { signout } from '../../header/actions/signout-action.service'

type DeleteModalProps = {
  closeModal: () => void
  onAction: () => Promise<{ ok: boolean }>
}

export default function ConfirmKeyModal({
  closeModal,
  onAction,
}: DeleteModalProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerate = async () => {
    setIsLoading(true)
    const data = await onAction()

    if (!data.ok) {
      toast({
        title: 'Ops!',
        description: 'Não foi possível gerar a chave',
      })
      setIsLoading(false)
      return
    }

    signout()
    closeModal()
    setIsLoading(false)

    toast({
      title: 'Yeah!',
      description: 'Chave gerada com sucesso',
    })
  }

  return (
    <section className="fixed inset-0 z-50 bg-black/80">
      <section className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] animate-content-show gap-4 border bg-background p-6 shadow-lg sm:rounded-lg">
        <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
          <Cross2Icon onClick={closeModal} className="h-4 w-4 cursor-pointer" />
          <span className="sr-only">Close</span>
        </div>
        <article className="space-y-10 py-5">
          <div className="flex flex-col space-y-1.5 text-left">
            <h1 className="flex items-center justify-start gap-2 text-lg font-semibold leading-none tracking-tight">
              Atenção <CircleAlert className="size-4 text-muted-foreground" />
            </h1>
            <p className="text-sm text-muted-foreground">
              Assim que você gerar uma nova chave, será desconectado e precisará
              fazer login novamente para visualizar a nova chave. Além disso, as
              aplicações que utilizam a chave atual apresentarão erros.
            </p>
          </div>
          <section className="sm:justify-end">
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="secondary" onClick={closeModal}>
                Cancelar
              </Button>
              <Button
                type="button"
                variant="destructive"
                onClick={handleGenerate}
              >
                {isLoading ? (
                  <span className="flex w-14 items-center justify-center gap-2">
                    <LoaderCircle className="animate-spin" />
                  </span>
                ) : (
                  <span className="w-14">Gerar</span>
                )}
              </Button>
            </div>
          </section>
        </article>
      </section>
    </section>
  )
}
