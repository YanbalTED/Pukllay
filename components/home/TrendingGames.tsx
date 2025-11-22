'use client'

import { GameCard } from '@/components/games/GameCard'
import { TrendingUp } from 'lucide-react'

// Mock data
const trendingGames = [
  {
    id: '4',
    title: 'Lima Nights',
    developer: 'Urban Games',
    price: 7.99,
    image: '/games/lima-nights.jpg',
    rating: 4.7,
    reviews: 203,
    category: 'Simulación',
  },
  {
    id: '5',
    title: 'Andes Adventure',
    developer: 'Mountain Dev',
    price: 12.99,
    image: '/games/andes-adventure.jpg',
    rating: 4.5,
    reviews: 167,
    category: 'Aventura',
  },
  {
    id: '6',
    title: 'Pisco Quest',
    developer: 'Coastal Studios',
    price: 5.99,
    image: '/games/pisco-quest.jpg',
    rating: 4.6,
    reviews: 98,
    category: 'Arcade',
  },
]

export function TrendingGames() {
  return (
    <section>
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">
            Tendencia Ahora
          </h2>
          <p className="text-neutral-600">
            Los juegos más populares esta semana
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </section>
  )
}

