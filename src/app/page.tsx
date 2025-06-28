import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 text-neutral-900 p-8">
      <h1 className="text-3xl font-bold mb-8"><span className="bg-gradient-primary-blue text-gradient">ShowOn.AI</span> - All Routes</h1>
      <ul className="space-y-4 w-full max-w-xs">
        <li>
          <Link href="/dashboard" className="block w-full bg-secondary-blue-900 text-white rounded px-4 py-3 text-center">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/login" className="block w-full bg-secondary-blue-900 text-white rounded px-4 py-3 text-center">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup" className="block w-full bg-secondary-blue-900 text-white rounded px-4 py-3 text-center">
            Signup
          </Link>
        </li>
      </ul>
    </div>
  );
}
