import { AddProjectForm } from '@/components/features/create-project/_components/add-project-form'

export default function page() {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <article className="container size-full">
        <AddProjectForm />
      </article>
    </section>
  )
}
