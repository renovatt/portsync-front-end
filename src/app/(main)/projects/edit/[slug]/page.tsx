import { Suspense } from 'react'
import Loader from '@globals/_components/loader'
import { getProjectsById } from '@features/projects/actions/get-project-by-id-action.service'
import { CreateAndEditProjectForm } from '@features/projects/_components/create-and-edit-project-form'
import { CustomError } from '@utils/custom-error'
import ErrorMessage from '@globals/_components/error-message'
import { ShieldX } from 'lucide-react'

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

  let error: CustomError | null = null

  if (!project.ok) {
    error = project as unknown as CustomError
  }

  return (
    <section className="my-10 flex animate-fade-right flex-col items-center justify-center">
      {error ? (
        <div className="mt-40 flex flex-col items-center justify-center gap-5 rounded-lg bg-accent p-4 shadow-lg">
          <ShieldX />
          <ErrorMessage error={error} />
        </div>
      ) : (
        <article className="container size-full">
          <Suspense fallback={<Loader />}>
            <CreateAndEditProjectForm projectId={slug} project={project} />
          </Suspense>
        </article>
      )}
    </section>
  )
}
