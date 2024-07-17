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
import { projects } from '@/static/project'

export const CreateAndEditProjectForm = ({ id }: { id?: string }) => {
  const project = projects.find((project) => project.id === id)

  const form = useForm<ProjectDto>({
    resolver: zodResolver(projectSchema),
    defaultValues: id
      ? project
      : {
          userId: '1646456464564564644',
          githubUrl: 'https://github.com/renovatt',
          stacks: [
            {
              iconUrl: `https://skillicons.dev/icons?i=${stacks[20].id}`,
            },
          ],
        },
  })

  const stacksList = form.watch('stacks')

  const onSubmit = form.handleSubmit((values) => {
    console.log(values)
    toast({
      title: 'Success',
      description: (
        <pre className="mt-2 rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  })

  const handleDeleteProject = (id: string) => {
    console.log('delete project', id)
  }

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

          {stacksList?.length > 0 && (
            <section className="mb-4 flex w-full flex-col gap-2">
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

          <StackModal />
        </section>

        <div className="mt-10 flex w-full gap-2 self-center md:mt-0 md:w-auto md:self-end">
          {id && (
            <Button
              variant="destructive"
              onClick={() => handleDeleteProject(id)}
              className="w-full md:w-60"
              type="button"
            >
              Apagar
            </Button>
          )}

          <Button className="w-full md:w-60" type="submit">
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  )
}
