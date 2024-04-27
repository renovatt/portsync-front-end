import { z } from 'zod'

export const projectSchema = z.object({
  userId: z.string(),
  name: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(3, 'Deve ter no mínimo 3 caracteres')
    .max(50, 'Deve ter no máximo 50 caracteres'),
  description: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(3, 'Deve ter no mínimo 3 caracteres'),
  bannerUrl: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .url('Deve ser uma URL válida'),
  thumbnailUrl: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .url('Deve ser uma URL válida'),
  deployedUrl: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .url('Deve ser uma URL válida'),
  githubUrl: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .url('Deve ser uma URL válida'),
  position: z
    .number({
      errorMap: () => {
        return { message: 'Deve ser um número inteiro' }
      },
    })
    .transform((val) => {
      const num = Number(val)
      if (isNaN(num)) {
        throw new Error('Deve ser um número')
      }
      return num
    }),
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

export type ProjectDto = z.infer<typeof projectSchema>
