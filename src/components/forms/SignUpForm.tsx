"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/label"
import { AuthCard } from "@/components/auth/AuthCard"
import { ArrowRight, Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

export function SignUpForm() {
  const router = useRouter()
  const { register, loading, error, clearError, isAuthenticated } = useAuth()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }
  }, [isAuthenticated, router])

  useEffect(() => {
    clearError()
  }, [clearError])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await register({ name, email, password })
    
    if (success) {
      router.push('/dashboard')
    }
  }

  return (
    <AuthCard
      title={
        <>
          Welcome to{" "}
          <span className="bg-gradient-primary-blue text-gradient">
            ShowOnAI!
          </span>
        </>
      }
      subtitle="Create an account to start AI-powered SEO analysis."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Error Message */}
        {error && (
          <div className="p-3 bg-danger-50 border border-danger-200 rounded-lg">
            <p className="text-sm text-danger-700">{error}</p>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium text-neutral-700">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={loading}
            className="h-12 bg-neutral-50 border-neutral-200 focus:border-primary-blue-500 focus:ring-primary-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-neutral-700">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            className="h-12 bg-neutral-50 border-neutral-200 focus:border-primary-blue-500 focus:ring-primary-blue-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium text-neutral-700">
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              className="h-12 bg-neutral-50 border-neutral-200 focus:border-primary-blue-500 focus:ring-primary-blue-500 pr-12"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
              disabled={loading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary-blue-600 focus:outline-none disabled:opacity-50"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg flex items-center justify-center gap-2 mt-6 disabled:opacity-50"
        >
          {loading ? "Creating Account..." : "Sign Up"}
          {!loading && <ArrowRight className="h-4 w-4" />}
        </Button>
      </form>

      <div className="text-center pt-4">
        <p className="text-sm text-neutral-500">
          Already have an account?{" "}
          <Link href="/login" className="text-primary-blue-600 hover:text-primary-blue-700 font-medium">
            Log In
          </Link>
        </p>
      </div>
    </AuthCard>
  )
}
