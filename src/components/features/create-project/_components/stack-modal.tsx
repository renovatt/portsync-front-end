/* eslint-disable @next/next/no-img-element */
'use lcient'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { ProjectDto } from '@/schemas/project-schema'
import { stacks } from '@/static/stacks'
import { useFormContext } from 'react-hook-form'

export function StackModal() {
  const formContext = useFormContext<ProjectDto>()
  return (
    <Dialog>
      <DialogTrigger asChild className="my-2 w-full">
        <Button variant="outline">Adicionar stacks</Button>
      </DialogTrigger>
      <DialogContent className="size-full max-h-[90%] max-w-7xl overflow-auto py-5 scrollbar-hide">
        <DialogHeader>
          <DialogTitle>Escolha as stacks do projeto</DialogTitle>
          <DialogDescription>
            Você deve adicionar pelo menos uma stack.
          </DialogDescription>
        </DialogHeader>
        <section className="flex size-full items-center justify-center rounded-lg p-4">
          <FormField
            control={formContext.control}
            name="stacks"
            render={() => (
              <FormItem>
                {/* <div className="mb-4">
                  <FormLabel>Stacks</FormLabel>
                </div> */}
                <div className="grid grid-cols-2 gap-2 overflow-y-auto scrollbar-hide md:grid-cols-3 lg:grid-cols-5">
                  {stacks.map((item) => (
                    <FormField
                      key={item.id}
                      control={formContext.control}
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
                              className="size-14 rounded-xl bg-slate-200"
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
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Comfirmar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
