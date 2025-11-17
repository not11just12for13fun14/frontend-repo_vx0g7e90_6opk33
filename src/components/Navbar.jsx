import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Technology', href: '#technology' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="text-white font-semibold tracking-wide">Aether Aesthetics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-shadow"
            >
              Book consultation
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-white/80 hover:text-white hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#booking"
              className="block text-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-2 font-medium"
              onClick={() => setOpen(false)}
            >
              Book consultation
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
