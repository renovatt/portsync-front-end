import { Suspense } from 'react'
import Loader from '@/components/@globals/_components/loader'
import { CreateAndEditProjectForm } from '@/components/features/create-and-edit-project/_components/create-and-edit-project-form'
import { getProjectsById } from '@/components/features/create-and-edit-project/actions/get-project-by-id-action.service'

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params: { slug } }: Props) {
  const projects = await getProjectsById(slug)

  const APP_NAME = `${projects.name}`
  const APP_DESCRIPTION = projects.description
  const BANNER_IMAGE = projects.bannerUrl

  return {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    openGraph: {
      title: APP_NAME,
      description: APP_DESCRIPTION,
      images: [
        {
          url: BANNER_IMAGE,
        },
      ],
    },
  }
}

export default async function page({ params: { slug } }: Props) {
  const project = await getProjectsById(slug)
  return (
    <Suspense fallback={<Loader />}>
      <section className="my-10 flex animate-fade-right flex-col items-center justify-center">
        <article className="container size-full">
          <CreateAndEditProjectForm projectId={slug} project={project} />
        </article>
      </section>
    </Suspense>
  )
}
