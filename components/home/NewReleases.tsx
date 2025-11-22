'use client'

import { GameCard } from '@/components/games/GameCard'
import { Sparkles } from 'lucide-react'

// Mock data
const newReleases = [
  {
    id: '7',
    title: 'Selva Misteriosa',
    developer: 'Amazon Games',
    price: 11.99,
    image: '/games/selva-misteriosa.jpg',
    rating: 4.8,
    reviews: 45,
    category: 'Misterio',
  },
  {
    id: '8',
    title: 'Carnaval Run',
    developer: 'Festival Dev',
    price: 6.99,
    image: '/games/carnaval-run.jpg',
    rating: 4.4,
    reviews: 32,
    category: 'Arcade',
  },
  {
    id: '9',
    title: 'Trujillo Defender',
    developer: 'North Studios',
    price: 9.99,
    image: '/games/trujillo-defender.jpg',
    rating: 4.7,
    reviews: 67,
    category: 'Tower Defense',
  },
]

export function NewReleases() {
  return (
    <section>
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-neutral-900">
            Nuevos Lanzamientos
          </h2>
          <p className="text-neutral-600">
            Los juegos más recientes de desarrolladores peruanos
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newReleases.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </section>
  )
}

