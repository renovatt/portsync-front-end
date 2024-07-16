import { EditProjectForm } from '@/components/features/edit-project/_components/edit-project-form'

type Props = {
  params: {
    slug: string
  }
}

export default function page({ params: { slug } }: Props) {
  return (
    <section className="my-10 flex flex-col items-center justify-center px-4">
      <article className="container flex size-full items-center justify-center">
        <EditProjectForm id={slug} />
      </article>
    </section>
  )
}
