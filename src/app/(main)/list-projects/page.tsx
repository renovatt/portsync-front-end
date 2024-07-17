import { projects } from '@/static/project'
import CardProject from '@/components/features/list-project/_components/card-project'

export default function page() {
  return (
    <section className="my-10 flex flex-col items-center justify-center">
      <article className="container flex size-full flex-wrap items-center justify-center gap-5 md:justify-start">
        {projects.map((project) => (
          <CardProject key={project.id} {...project} />
        ))}
      </article>
    </section>
  )
}
