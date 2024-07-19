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
import { signin } from '../actions/signin-action.service'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { LoaderCircle } from 'lucide-react'

export const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const form = useForm<SigninDto>({
    resolver: zodResolver(signinSchema),
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setIsLoading(true)
    const data = await signin(values)

    if (!data.ok) {
      toast({
        title: 'Ops!',
        description: data.message,
      })
      setIsLoading(false)
      return
    }

    toast({
      title: 'Yeah!',
      description: 'Bem vindo!',
    })

    setIsLoading(false)
    router.push('/projects')
  })

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="animate-fade-left flex w-full max-w-96 flex-col items-center justify-center space-y-2 p-4"
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
        <Button disabled={isLoading} className="w-full" type="submit">
          {isLoading ? (
            <span className="flex items-center gap-2">
              <LoaderCircle className="animate-spin" />
              Verificando...
            </span>
          ) : (
            'Login'
          )}
        </Button>
      </form>
    </Form>
  )
}
