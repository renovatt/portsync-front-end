import { Metadata } from 'next'
import StackForm from '@/components/features/stacks/_components/stack-form'

export const metadata: Metadata = {
  title: 'Adicionar',
}

export default async function page() {
  return (
    <section className="my-10 flex animate-fade-right flex-col items-center justify-center">
      <article className="container size-full">
        <StackForm />
      </article>
    </section>
  )
}
