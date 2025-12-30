import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-fidelity font-bold text-xl">Elysium Finance</div>
            <nav className="ml-8 space-x-4 hidden md:flex">
              <Link href="/" className="text-slate-600 hover:text-slate-900">Home</Link>
              <Link href="/dashboard" className="text-slate-600 hover:text-slate-900">Dashboard</Link>
              <Link href="/about" className="text-slate-600 hover:text-slate-900">About</Link>
            </nav>
          </div>
          <div>
            <Link href="/login" className="px-4 py-2 border rounded text-sm">Sign in</Link>
          </div>
        </div>
      </div>
    </header>
  )
}
