'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Star, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { Game } from '@/types/game'

interface GameCardProps {
  game: Game
  featured?: boolean
  index?: number
}

export function GameCard({ game, featured = false, index = 0 }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={`/games/${game.id}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-video bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
            <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
              <span className="text-neutral-400 text-sm">Imagen del juego</span>
            </div>
            {game.featured && (
              <div className="absolute top-3 left-3 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                Destacado
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <div>
              <h3 className="font-bold text-lg text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-1">
                {game.title}
              </h3>
              <p className="text-sm text-neutral-500">{game.developer}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-accent-500 text-accent-500" />
                <span className="text-sm font-semibold text-neutral-900">
                  {game.rating}
                </span>
                <span className="text-xs text-neutral-500">
                  ({game.reviews})
                </span>
              </div>
              <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded-lg">
                {game.category}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-neutral-900">
                  S/ {game.price.toFixed(2)}
                </span>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors text-sm font-semibold">
                <Download className="w-4 h-4" />
                <span>Comprar</span>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

