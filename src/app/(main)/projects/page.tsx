import { Suspense } from 'react'
import { ShieldX } from 'lucide-react'
import { CustomError } from '@/utils/custom-error'
import { getProjects } from '@/services/get-project.service'
import Loader from '@/components/@globals/_components/loader'
import ErrorMessage from '@/components/@globals/_components/error-message'
import { ProjectResponseDto } from '@/entities/project-response.dto'
import CardProject from '@/components/features/create-and-edit-project/_components/card-project/card-project'

export default async function page() {
  let projects: ProjectResponseDto = []
  let error: CustomError | null = null

  try {
    projects = await getProjects()
  } catch (err) {
    error = err as CustomError
  }

  return (
    <section className="my-10 flex flex-col items-center justify-center">
      {error ? (
        <div className="mt-40 flex flex-col items-center justify-center gap-5 rounded-lg bg-accent p-4 shadow-lg">
          <ShieldX />
          <ErrorMessage error={error} />
        </div>
      ) : (
        <article className="container flex size-full flex-wrap items-center justify-center gap-5 md:justify-start">
          <Suspense fallback={<Loader />}>
            {Array.isArray(projects) &&
              projects
                ?.sort((a, b) => a.position - b.position)
                ?.map((project) => (
                  <CardProject key={project.id} {...project} />
                ))}
          </Suspense>
        </article>
      )}
    </section>
  )
}
