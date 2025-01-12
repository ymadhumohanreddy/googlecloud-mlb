import Link from 'next/link'
import DarkModeToggle from './dark-mode-toggle'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-2 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold hover:text-blue-200 transition-colors">
          Baseball Analytics
        </Link>
        <ul className="flex space-x-4 items-center">
          <li><Link href="/" className="hover:text-black
          transition-colors">Home</Link></li>
          <li><Link href="/features" className="hover:text-black
          transition-colors">Features</Link></li>
          <li><Link href="/about" className="hover:text-black
          transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-black
           transition-colors">Contact</Link></li>
          <li><Link href="/auth/login" className="hover:text-black transition-colors">Login</Link></li>
          <li><DarkModeToggle /></li>
        </ul>
      </nav>
    </header>
  )
}

