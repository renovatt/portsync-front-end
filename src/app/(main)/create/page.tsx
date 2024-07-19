import { CreateAndEditProjectForm } from '@/components/features/create-and-edit-project/_components/create-and-edit-project-form'

export default function page() {
  return (
    <section className="my-10 flex animate-fade-right flex-col items-center justify-center">
      <article className="container size-full">
        <CreateAndEditProjectForm />
      </article>
    </section>
  )
}
