import { CreateAndEditProjectForm } from '@/components/features/create-and-edit-project-form/_components/create-and-edit-project-form'

export default function page() {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <article className="container size-full">
        <CreateAndEditProjectForm />
      </article>
    </section>
  )
}
