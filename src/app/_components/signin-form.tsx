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
import { SigninDto, signinSchema } from '@/schemas/signin-schema'

export const SigninForm = () => {
  const form = useForm<SigninDto>({
    resolver: zodResolver(signinSchema),
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
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu e-mail" {...field} />
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
          Login
        </Button>
      </form>
    </Form>
  )
}
