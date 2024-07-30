'use client'
import { Button } from '@ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/form'
import { Input } from '@ui/input'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from '@ui/use-toast'
import { SignupDto, signupSchema } from '@schemas/signup-schema'

export const SignupForm = () => {
  const form = useForm<SignupDto>({
    resolver: zodResolver(signupSchema),
  })

  const onSubmit = form.handleSubmit((values) => {
    console.log(values)
    toast({
      title: 'Success',
      description: 'You have successfully signed in.',
    })
  })

  return (
    <Form {...form}>
      <form
        action=""
        onSubmit={onSubmit}
        className="flex w-full max-w-96 flex-col items-center justify-center space-y-2 p-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu e-mail"
                  type="email"
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
          name="password"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite sua senha"
                  type="password"
                  {...field}
                />
              </FormControl>
              <div className="h-5">
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Cadastrar
        </Button>
      </form>
    </Form>
  )
}
