'use client'

import Link from 'next/link'
import { GameCard } from '@/components/games/GameCard'
import { ArrowRight } from 'lucide-react'

// Mock data - en producción vendría de la API
const featuredGames = [
  {
    id: '1',
    title: 'Machu Picchu Quest',
    developer: 'Lima Games',
    price: 9.99,
    image: '/games/machu-picchu.jpg',
    rating: 4.8,
    reviews: 124,
    category: 'Aventura',
    featured: true,
  },
  {
    id: '2',
    title: 'Ceviche Run',
    developer: 'Arequipa Studios',
    price: 4.99,
    image: '/games/ceviche-run.jpg',
    rating: 4.6,
    reviews: 89,
    category: 'Arcade',
    featured: true,
  },
  {
    id: '3',
    title: 'Inca Legends',
    developer: 'Cusco Dev',
    price: 14.99,
    image: '/games/inca-legends.jpg',
    rating: 4.9,
    reviews: 256,
    category: 'RPG',
    featured: true,
  },
]

export function FeaturedGames() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-2">
            Juegos Destacados
          </h2>
          <p className="text-neutral-600">
            Los mejores juegos peruanos seleccionados especialmente para ti
          </p>
        </div>
        <Link
          href="/games"
          className="hidden md:flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
        >
          <span>Ver todos</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredGames.map((game, index) => (
          <GameCard key={game.id} game={game} featured index={index} />
        ))}
      </div>
    </section>
  )
}

