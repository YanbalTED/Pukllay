'use client'

import Link from 'next/link'
import { Gamepad2, Sword, Puzzle, Zap, Target, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = [
  { id: 'aventura', name: 'Aventura', icon: Gamepad2, color: 'from-primary-500 to-primary-600' },
  { id: 'accion', name: 'Acción', icon: Sword, color: 'from-red-500 to-red-600' },
  { id: 'puzzle', name: 'Puzzle', icon: Puzzle, color: 'from-blue-500 to-blue-600' },
  { id: 'arcade', name: 'Arcade', icon: Zap, color: 'from-yellow-500 to-yellow-600' },
  { id: 'estrategia', name: 'Estrategia', icon: Target, color: 'from-green-500 to-green-600' },
  { id: 'multijugador', name: 'Multijugador', icon: Users, color: 'from-purple-500 to-purple-600' },
]

export function Categories() {
  return (
    <section>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-neutral-900 mb-2">
          Explora por Categoría
        </h2>
        <p className="text-neutral-600">
          Encuentra juegos que se adapten a tu estilo
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={`/games?category=${category.id}`}>
                <div className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

