import { CreateAndEditProjectForm } from '@/components/features/create-and-edit-project-form/_components/create-and-edit-project-form'

type Props = {
  params: {
    slug: string
  }
}

export default function page({ params: { slug } }: Props) {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <article className="container size-full">
        <CreateAndEditProjectForm id={slug} />
      </article>
    </section>
  )
}
