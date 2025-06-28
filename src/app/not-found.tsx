"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-blue-50 via-info-50 to-primary-blue-100">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 flex flex-col items-center max-w-lg w-full">
        <h1 className="text-6xl font-extrabold text-primary-blue-700 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Page Not Found</h2>
        <p className="text-neutral-500 mb-6 text-center">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="px-6 py-3 bg-primary-blue-600 text-white rounded-lg font-semibold hover:bg-primary-blue-700 transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 