import { z } from 'zod'

export const stackSchema = z.object({
  id: z.string().optional(),
  stacks: z
    .array(
      z.object({
        iconUrl: z
          .string({ required_error: 'Campo obrigatório' })
          .url('Deve ser uma URL válida'),
      }),
    )
    .refine((val) => val.some((stack) => stack.iconUrl), {
      message: 'Deve ter pelo menos uma stack',
    }),
})

export type StackSchema = z.infer<typeof stackSchema>
