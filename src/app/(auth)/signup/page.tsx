import { SignupForm } from '@/app/_components/signup-form'
import { AuthFormSeparator } from '@/app/_components/auth-form-separator'

export default function Signin() {
  return (
    <section className="flex size-full flex-col items-center justify-center space-y-2 bg-primary-foreground">
      <SignupForm />
      <AuthFormSeparator type="signup" />
    </section>
  )
}
