import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <h1 className="text-5xl font-bold text-white">LOGO</h1>
      </article>
    </section>
  )
}
