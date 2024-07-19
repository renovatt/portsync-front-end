import type { Metadata } from 'next'
import { Bolt } from 'lucide-react'

const APP_NAME = 'PortSync'
const APP_DESCRIPTION = 'PortSync - Sistema de Gerenciamento para portfolio.'

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s : ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="flex items-center justify-center">
      <article className="flex size-full h-screen items-center justify-center bg-primary md:w-1/2">
        {children}
      </article>

      <article className="hidden h-screen w-1/2 items-center justify-center bg-primary md:flex">
        <section className="flex animate-fade-right flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-bold text-secondary">
            Port<span className="text-destructive">Sync</span>
          </h1>
          <p className="text-secondary">
            O seu sistema de gerenciamento para portfolio.
          </p>
          <Bolt className="size-10 text-secondary" />
        </section>
      </article>
    </section>
  )
}
