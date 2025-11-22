'use client'

import Link from 'next/link'
import { Search, User, ShoppingCart, Menu } from 'lucide-react'
import { useState } from 'react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
              Pukllay
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar juegos..."
                className="w-full pl-10 pr-4 py-2 bg-neutral-100 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Mobile */}
            <button className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <Search className="w-5 h-5 text-neutral-600" />
            </button>

            {/* Cart */}
            <button className="relative p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-neutral-600" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* User Account */}
            <Link
              href="/login"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Iniciar Sesión</span>
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-neutral-600" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-2">
              <Link href="/games" className="px-4 py-2 hover:bg-neutral-100 rounded-lg">
                Todos los Juegos
              </Link>
              <Link href="/developers" className="px-4 py-2 hover:bg-neutral-100 rounded-lg">
                Desarrolladores
              </Link>
              <Link href="/login" className="px-4 py-2 bg-primary-500 text-white rounded-lg text-center">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

