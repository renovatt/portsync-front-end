/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from '@ui/button'
import { Checkbox } from '@ui/checkbox'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from '@ui/form'
import { StackSchema, stackSchema } from '@schemas/stack-schema'
import { stacks } from '~static/stacks'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoaderCircle } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createMany } from '../actions/create-many-stack-action.service'
import { toast } from '@ui/use-toast'

export default function StackForm() {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const form = useForm<StackSchema>({
    resolver: zodResolver(stackSchema),
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setIsLoading(true)

    const created = await createMany(values.stacks)

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
      description: 'Habilidades criadas com sucesso!',
    })

    setIsLoading(false)
    router.push('/stacks')
  })

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="flex size-full flex-col items-center justify-center"
      >
        <section className="flex size-full items-center justify-center rounded-lg p-4">
          <FormField
            control={form.control}
            name="stacks"
            render={() => (
              <FormItem>
                <div className="grid grid-cols-2 gap-2 overflow-y-auto scrollbar-hide md:grid-cols-3 lg:grid-cols-5">
                  {stacks.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="stacks"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-center justify-start space-x-2 space-y-0 rounded-xl bg-accent p-2"
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${item.id}`}
                              alt={item.label}
                              className="size-14 rounded-xl"
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
                            <FormLabel className="flex size-full cursor-pointer items-center justify-start text-sm font-normal transition-all hover:opacity-80">
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

        <div className="mt-10 flex w-full gap-2 self-center md:mt-0 md:w-auto md:self-end">
          <Button className="w-full md:w-60" type="submit">
            {isLoading ? (
              <span className="flex items-center gap-2">
                <LoaderCircle className="animate-spin" />
                Salvando
              </span>
            ) : (
              <span className="flex items-center gap-2">Salvar</span>
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
