'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Patrón andino sutil de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 leading-tight">
              Juegos Peruanos
              <br />
              <span className="text-primary-600">Hechos con Pasión</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto">
              Descubre y juega los mejores juegos desarrollados en Perú. 
              Paga fácilmente con Yape y Plin.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/games"
              className="group flex items-center space-x-2 px-8 py-4 bg-primary-500 text-white rounded-2xl hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span className="font-semibold">Explorar Juegos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/developers"
              className="flex items-center space-x-2 px-8 py-4 bg-white text-neutral-900 border-2 border-neutral-200 rounded-2xl hover:border-primary-300 hover:bg-primary-50 transition-all"
            >
              <Play className="w-5 h-5" />
              <span className="font-semibold">Soy Desarrollador</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-12 border-t border-neutral-200"
          >
            <div>
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-sm text-neutral-600">Juegos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">200+</div>
              <div className="text-sm text-neutral-600">Desarrolladores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">10K+</div>
              <div className="text-sm text-neutral-600">Jugadores</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

