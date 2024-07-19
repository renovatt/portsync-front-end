import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

type Props = {
  type: 'signin' | 'signup'
}

export const AuthFormSeparator = ({ type }: Props) => {
  return (
    <section className="flex w-full max-w-96 flex-col items-center justify-center gap-2">
      {type === 'signin' ? (
        <p className="text-xs text-muted-foreground">
          Ainda não tem uma conta?
        </p>
      ) : (
        <p className="text-xs text-muted-foreground">Já tem tem uma conta?</p>
      )}
      <Separator />
      {type === 'signin' ? (
        <Link
          className="text-xs text-primary hover:text-primary hover:underline"
          href={'/signup'}
        >
          Cadastrar
        </Link>
      ) : (
        <Link
          className="text-xs text-primary hover:text-primary hover:underline"
          href={'/signin'}
        >
          Fazer login
        </Link>
      )}
    </section>
  )
}
