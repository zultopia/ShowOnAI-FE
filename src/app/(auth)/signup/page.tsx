import { SignUpForm } from "@/components/forms/SignUpForm"
import { AuthLayout } from "@/components/auth/AuthLayout"

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  )
}
