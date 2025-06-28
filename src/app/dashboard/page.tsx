"use client"

import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  const { user, isAuthenticated, logout, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Not Logged In</h1>
        <Link href="/login" className="text-primary-blue-600 hover:underline">Go to Login</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="mb-4 text-neutral-600">You are logged in as:</p>
        <div className="mb-6 w-full">
          <div className="flex flex-col gap-1">
            <span><b>Name:</b> {user?.name}</span>
            <span><b>Email:</b> {user?.email}</span>
            <span><b>Role:</b> {user?.role}</span>
            <span><b>Approved:</b> {user?.approved ? "Yes" : "No"}</span>
            <span><b>User ID:</b> {user?.id}</span>
          </div>
        </div>
        <Button onClick={logout} className="w-full bg-danger-600 hover:bg-danger-700 text-white font-semibold rounded-lg">Logout</Button>
      </div>
    </div>
  );
}
