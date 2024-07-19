import { Bolt } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { SigninForm } from '@/components/features/auth/_components/signin-form'
import GithubIcon from '@/components/@globals/static/icons/github-icon'
import LinkedinIcon from '@/components/@globals/static/icons/linkedin-icon'
import Link from 'next/link'

export default function Signin() {
  return (
    <section className="flex size-full flex-col items-center justify-center space-y-4 bg-primary-foreground">
      <div className="animate-fade-left flex w-full max-w-96 flex-col items-start justify-center px-4">
        <Bolt className="size-5 text-primary" />
        <h1 className="text-xl font-semibold">Sincronize com seu portfolio</h1>
        <p className="text-xs text-muted-foreground">
          Adicione seus projetos e habilidades
        </p>
      </div>
      <SigninForm />

      <section className="flex w-full max-w-96 flex-col items-center justify-center space-y-3">
        <p className="text-xs text-muted-foreground">
          Projeto único sem criação de contas diversas
        </p>
        <Separator />
        <div className="flex items-center justify-center gap-2">
          <Link href={'https://github.com/renovatt'} target="_blank">
            <LinkedinIcon className="size-5 transition-all hover:cursor-pointer hover:opacity-75" />
          </Link>
          <Link href={'https://www.linkedin.com/in/renovatt/'} target="_blank">
            <GithubIcon className="size-5 transition-all hover:cursor-pointer hover:opacity-75" />
          </Link>
        </div>
      </section>
    </section>
  )
}
