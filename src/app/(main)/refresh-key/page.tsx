import { Metadata } from 'next'
import ViewAndGenerateApiKey from '@/components/features/key/_components/view-and-genate-api-key'

export const metadata: Metadata = {
  title: 'Genenciar',
}

export default function page() {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <article className="container size-full">
        <ViewAndGenerateApiKey />
      </article>
    </section>
  )
}
