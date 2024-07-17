import { Suspense } from 'react'
import Loader from '@/components/@globals/_components/loader'
import { getProjects } from '@/services/get-project.service'
import { getProjectsById } from '@/services/get-project-by-id.service'
import { CreateAndEditProjectForm } from '@/components/features/create-and-edit-project/_components/create-and-edit-project-form'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.map((project) => ({
    id: project.id?.toString(),
  }))
}

export default async function page({ params: { slug } }: Props) {
  const project = await getProjectsById(slug)
  return (
    <Suspense fallback={<Loader />}>
      <section className="my-10 flex flex-col items-center justify-center">
        <article className="container size-full">
          <CreateAndEditProjectForm projectId={slug} project={project} />
        </article>
      </section>
    </Suspense>
  )
}
