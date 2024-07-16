import { SigninForm } from '@/components/features/auth/_components/signin-form'
import { AuthFormSeparator } from '@/components/features/auth/_components/auth-form-separator'

export default function Signin() {
  return (
    <section className="flex size-full flex-col items-center justify-center space-y-2 bg-primary-foreground">
      <SigninForm />
      <AuthFormSeparator type="signin" />
    </section>
  )
}
