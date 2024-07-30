import { Suspense } from 'react'
import { ShieldX } from 'lucide-react'
import { CustomError } from '@utils/custom-error'
import Loader from '@globals/_components/loader'
import ErrorMessage from '@globals/_components/error-message'
import { Metadata } from 'next'
import StackImageCard from '@features/stacks/_components/stack-image-card'
import { getStacks } from '@features/stacks/actions/get-stacks-action.service'
import { StackDto, StacksResponseDto } from '@entities/stack.dto'

export const metadata: Metadata = {
  title: 'Habilidades',
  description: 'Listagem de habilidades',
}

export default async function page() {
  let stacks: StacksResponseDto = []
  let error: CustomError | null = null

  try {
    stacks = await getStacks()
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
            {Array.isArray(stacks) &&
              stacks?.map((stack) => (
                <StackImageCard key={stack.id} {...(stack as StackDto)} />
              ))}
          </Suspense>
        </article>
      )}
    </section>
  )
}
