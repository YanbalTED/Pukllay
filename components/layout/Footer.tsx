import Link from 'next/link'
import { Github, Twitter, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold text-white">Pukllay</span>
            </div>
            <p className="text-sm text-neutral-400">
              Descubre y juega los mejores juegos desarrollados en Perú.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/games" className="hover:text-primary-400 transition-colors">
                  Todos los Juegos
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-primary-400 transition-colors">
                  Desarrolladores
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-white font-semibold mb-4">Desarrolladores</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/developers/register" className="hover:text-primary-400 transition-colors">
                  Publicar Juego
                </Link>
              </li>
              <li>
                <Link href="/developers/docs" className="hover:text-primary-400 transition-colors">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="/developers/support" className="hover:text-primary-400 transition-colors">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-primary-400 transition-colors">
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>© 2025 Pukllay. Todos los derechos reservados.</p>
          <p className="mt-2">Hecho con ❤️ en Perú</p>
        </div>
      </div>
    </footer>
  )
}

