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
import { Checkbox } from '@/components/ui/checkbox'
import { stacks } from '@/static/stacks'

export const AddProjectForm = () => {
  const form = useForm<ProjectDto>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      userId: '1646456464564564644',
      name: 'Projeto',
      position: 10,
      description: 'Descrição do projeto',
      bannerUrl: 'https://via.placeholder.com/150',
      thumbnailUrl: 'https://via.placeholder.com/150',
      deployedUrl: 'https://via.placeholder.com/150',
      githubUrl: 'https://github.com/renovatt',
      stacks: [
        {
          iconUrl: `https://skillicons.dev/icons?i=${stacks[20].id}`,
        },
      ],
    },
  })

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

  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={onSubmit}
        className="flex size-full flex-col items-center justify-center md:w-1/2"
      >
        <section className="flex size-full flex-col items-center justify-around ">
          <section className="size-full">
            <div className="mb-4">
              <FormLabel className="text-base font-bold">
                Adicionar novo projeto
              </FormLabel>
            </div>
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-60">
                    <FormLabel>Nome do projeto</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Informe o nome do projeto"
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
                name="position"
                render={({ field }) => (
                  <FormItem className="w-24">
                    <FormLabel>Posiçao</FormLabel>
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
                    <FormLabel>Banner</FormLabel>
                    <FormControl>
                      <Input placeholder="Informe a url do banner" {...field} />
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
                    <FormLabel>Thumbnail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Informe a url da thumbnail"
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
                    <FormLabel>GitHub</FormLabel>
                    <FormControl>
                      <Input placeholder="Informe url do github" {...field} />
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
                    <FormLabel>Deploy</FormLabel>
                    <FormControl>
                      <Input placeholder="Informe a url do deploy" {...field} />
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

          <section className="flex size-full items-center justify-center">
            <FormField
              control={form.control}
              name="stacks"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Stacks</FormLabel>
                  </div>

                  <div className="grid grid-cols-2 gap-2 overflow-y-auto scrollbar-hide md:grid-cols-3 lg:grid-cols-4">
                    {stacks.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="stacks"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-center justify-start space-x-2 space-y-0 rounded-xl bg-secondary p-2"
                            >
                              <img
                                src={`https://skillicons.dev/icons?i=${item.id}`}
                                alt={item.label}
                              />
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.some(
                                    (value) =>
                                      value.iconUrl ===
                                      `https://skillicons.dev/icons?i=${item.id}`,
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      field.onChange([
                                        ...(field.value || []),
                                        {
                                          iconUrl: `https://skillicons.dev/icons?i=${item.id}`,
                                        },
                                      ])
                                    } else {
                                      field.onChange(
                                        (field.value || []).filter(
                                          (value) =>
                                            value.iconUrl !==
                                            `https://skillicons.dev/icons?i=${item.id}`,
                                        ),
                                      )
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="cursor-pointer text-sm font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <div className="h-5">
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
          </section>
        </section>

        <Button className="w-full" type="submit">
          Salvar
        </Button>
      </form>
    </Form>
  )
}
