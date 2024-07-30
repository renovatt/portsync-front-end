import { SignupForm } from '@features/auth/_components/signup-form'
import { AuthFormSeparator } from '@features/auth/_components/auth-form-separator'

export default function Signin() {
  return (
    <section className="flex size-full flex-col items-center justify-center space-y-2 bg-primary-foreground">
      <SignupForm />
      <AuthFormSeparator type="signup" />
    </section>
  )
}
