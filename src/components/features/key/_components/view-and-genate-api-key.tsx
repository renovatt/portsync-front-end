'use client'
import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { useAuth } from '@hooks/use-auth'
import { useCopy } from '@hooks/use-copy'
import { useToggle } from '@hooks/use-toggle'
import { Copy, CopyCheck, Eye, EyeOff, KeyRound } from 'lucide-react'
import ConfirmKeyModal from './confirm-key-modal'
import { refresh } from '../actions/refrest-api-key'

export default function ViewAndGenerateApiKey() {
  const { user } = useAuth()
  const { isCopied, copyApiKey } = useCopy()
  const { isOpen, toggleModal } = useToggle()
  const { isOpen: isOpenConfirmModal, openModal, closeModal } = useToggle()

  return (
    <>
      {isOpenConfirmModal && (
        <ConfirmKeyModal
          closeModal={closeModal}
          onAction={() => refresh(user?.id as string)}
        />
      )}

      <section className="flex size-full animate-fade-right flex-col items-start justify-center">
        <h2 className="text-xl font-semibold">Gerenciar</h2>
        <p className="text-xs text-muted-foreground">
          Visualize ou gere uma nova API KEY para acessar suas rotas públicas.
        </p>

        <article className="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
          <div className="relative my-10 flex w-full border md:w-96">
            <Input
              disabled
              placeholder="Visualizar chave"
              type={isOpen ? 'text' : 'password'}
              value={isOpen ? user?.apiKey : '***************************'}
              className="text-xs md:text-sm"
            />
            {isOpen ? (
              <Eye
                onClick={toggleModal}
                className="absolute right-4 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground"
              />
            ) : (
              <EyeOff
                onClick={toggleModal}
                className="absolute right-4 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground"
              />
            )}
          </div>

          {isCopied ? (
            <Button className="flex w-full items-center gap-5 md:w-40">
              <span className="w-14 text-start">Copiada</span>
              <CopyCheck className="size-4" />
            </Button>
          ) : (
            <Button
              onClick={copyApiKey}
              className="flex w-full items-center gap-5 md:w-40"
            >
              <span className="w-14 text-start">Copiar</span>{' '}
              <Copy className="size-4" />
            </Button>
          )}
        </article>

        <Button onClick={openModal} className="mt-4 flex w-full gap-5 md:w-60">
          Gerar nova chave <KeyRound className="size-4" />
        </Button>
      </section>
    </>
  )
}
