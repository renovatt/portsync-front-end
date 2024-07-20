/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from '@/components/ui/use-toast'
import { ProjectDto, projectSchema } from '@/schemas/project-schema'
import { Textarea } from '@/components/ui/textarea'
import { stacks } from '@/static/stacks'
import { StackModal } from './stack-modal'
import { create } from '../actions/create-action.service'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoaderCircle } from 'lucide-react'
import { getCookie } from 'cookies-next'
import { update } from '../actions/update-action.service'

type CreateAndEditProjectProps = {
  projectId?: string
  project?: ProjectDto
}

export const CreateAndEditProjectForm = ({
  projectId,
  project,
}: CreateAndEditProjectProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const userId = getCookie('@user')

  console.log(project)

  const form = useForm<ProjectDto>({
    resolver: zodResolver(projectSchema),
    defaultValues: projectId
      ? project
      : {
          userId,
          githubUrl: 'https://github.com/renovatt',
          stacks: [
            {
              iconUrl: `https://skillicons.dev/icons?i=${stacks[20].id}`,
            },
          ],
        },
  })

  const stacksList = form.watch('stacks')

  const onSubmit = form.handleSubmit(async (values) => {
    setIsLoading(true)

    if (projectId) {
      const updated = await update(projectId as string, values)

      if (!updated.ok) {
        toast({
          title: 'Ops!',
          description: updated.message,
        })
        setIsLoading(false)
        return
      }

      toast({
        title: 'Yeah!',
        description: 'Projeto atualizado com sucesso!',
      })

      setIsLoading(false)
      router.push('/projects')
      return
    }

    const created = await create(values)

    if (!created.ok) {
      toast({
        title: 'Ops!',
        description: created.message,
      })
      setIsLoading(false)
      return
    }

    toast({
      title: 'Yeah!',
      description: 'Projeto criado com sucesso!',
    })

    setIsLoading(false)
    router.push('/projects')
  })

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="flex size-full flex-col items-center justify-center"
      >
        <section className="flex size-full flex-col items-center justify-around">
          <section className="size-full">
            <div className="mb-4">
              <FormLabel className="text-base font-bold">
                Adicione um novo projeto
              </FormLabel>
            </div>

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-60">
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Portfolio - Renovatt" {...field} />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="w-wull">
                    <FormLabel>Posição</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="2"
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="bannerUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Link do banner</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/project-banner.png"
                        {...field}
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="thumbnailUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Link da thumbnail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/project-thumbnail.png"
                        {...field}
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="githubUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Link do projeto no gitHub</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://github.com/renovatt/project-name"
                        {...field}
                      />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deployedUrl"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Link do deploy</FormLabel>
                    <FormControl>
                      <Input placeholder="https://renovatt.dev.br" {...field} />
                    </FormControl>
                    <div className="h-5">
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Fale sobre o projeto.."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <div className="h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </section>

          <StackModal />

          {stacksList?.length > 0 && (
            <section className="my-4 flex w-full flex-col gap-2">
              <div className="flex flex-wrap items-center justify-start gap-1">
                {stacksList.map(({ iconUrl }) => (
                  <img
                    key={iconUrl}
                    src={iconUrl}
                    alt="stack-icon"
                    className="size-5"
                  />
                ))}
              </div>
              <span className="text-xs text-secondary-foreground">
                {stacksList?.length} stacks adicionadas
              </span>
            </section>
          )}
        </section>

        <div className="mt-10 flex w-full gap-2 self-center md:mt-0 md:w-auto md:self-end">
          <Button className="w-full md:w-60" type="submit">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <LoaderCircle className="animate-spin" />
                {projectId ? 'Atualizando...' : 'Salvando...'}
              </span>
            ) : (
              <span>{projectId ? 'Atualizar' : 'Salvar'}</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
