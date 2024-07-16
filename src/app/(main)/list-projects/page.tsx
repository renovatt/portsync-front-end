import Link from 'next/link'
import { projects } from '@/static/project'

export default function page() {
  return (
    <section className="my-10 flex flex-col items-center justify-center px-4">
      <article className="container flex size-full items-center justify-center">
        <ul className="grid w-full grid-cols-1 gap-2 overflow-y-scroll p-2 scrollbar-hide md:max-h-96 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ name, userId, description }) => (
            <Link key={name} href={`edit-project/${userId}`}>
              <div className="flex h-20 w-full cursor-pointer items-center justify-start gap-4 rounded-xl bg-primary p-2 transition-all hover:bg-primary/90">
                <div className="size-16 rounded-xl bg-secondary" />
                <div className="flex flex-col items-start justify-center">
                  <h2 className="font-bold text-secondary">Project - {name}</h2>
                  <p className="w-60 truncate text-primary-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </article>
    </section>
  )
}
