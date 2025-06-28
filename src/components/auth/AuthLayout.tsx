import type React from "react"
import { Header } from "@/components/layout/Header"

interface AuthLayoutProps {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-primary-blue-50 relative flex flex-col">
      <Header />

      <main className="flex flex-1 items-center justify-center px-4 py-8 md:py-12 relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center z-0"
        >
          <div className="w-90 h-3/5 bg-gradient-primary-blue rounded-full opacity-60 -translate-y-8" style={{ filter: "blur(70px)" }} />
          <div className="w-90 h-3/5 bg-gradient-primary-blue rounded-full opacity-60 translate-y-8" style={{ filter: "blur(70px)" }} />
        </div>
        <div className="relative z-10 w-full max-w-2xl px-4 md:px-0">{children}</div>
      </main>
    </div>
  )
}
