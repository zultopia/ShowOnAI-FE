import { LoginForm } from "@/components/forms/LoginForm"
import { AuthLayout } from "@/components/auth/AuthLayout"

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  )
}
