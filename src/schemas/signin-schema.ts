import { z } from 'zod'

export const signinSchema = z.object({
  email: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .email('Deve ser um e-mail válido'),
  password: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(8, 'Deve ter pelo menos 8 caracteres'),
})

export type SigninDto = z.infer<typeof signinSchema>
