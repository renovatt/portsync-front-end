import { z } from 'zod'

export const signupSchema = z.object({
  name: z
    .string({
      required_error: 'Campo obrigatório',
    })
    .min(3, 'Deve ter pelo menos 3 caracteres')
    .max(40, 'Deve ter no máximo 40 caracteres'),
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

export type SignupDto = z.infer<typeof signupSchema>
