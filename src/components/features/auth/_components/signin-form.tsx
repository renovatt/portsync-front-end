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
import { SigninDto, signinSchema } from '@schemas/signin-schema'
import { signin } from '../actions/signin-action.service'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { useToggle } from '@hooks/use-toggle'

export const SigninForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const { isOpen, toggleModal } = useToggle()

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
        className="flex w-full max-w-96 animate-fade-left flex-col items-center justify-center space-y-2 p-4"
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
                <div className="relative flex">
                  <Input
                    placeholder="Digite sua senha"
                    type={isOpen ? 'text' : 'password'}
                    {...field}
                  />
                  {isOpen ? (
                    <Eye
                      onClick={toggleModal}
                      className="absolute right-4 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground"
                    />
                  ) : (
                    <EyeOff
                      onClick={toggleModal}
                      className="absolute right-4 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-muted-foreground"
                    />
                  )}
                </div>
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
              Sincronizando...
            </span>
          ) : (
            'Login'
          )}
        </Button>
      </form>
    </Form>
  )
}
