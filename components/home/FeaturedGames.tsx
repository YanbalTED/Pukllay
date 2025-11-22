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
    developerId: 'dev-1',
    price: 9.99,
    image: '/games/machu-picchu.jpg',
    rating: 4.8,
    reviews: 124,
    category: 'Aventura',
    description: 'Embárcate en una aventura épica por las ruinas de Machu Picchu',
    releaseDate: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Ceviche Run',
    developer: 'Arequipa Studios',
    developerId: 'dev-2',
    price: 4.99,
    image: '/games/ceviche-run.jpg',
    rating: 4.6,
    reviews: 89,
    category: 'Arcade',
    description: 'Corre por las calles de Lima recolectando ingredientes para el mejor ceviche',
    releaseDate: '2024-02-20',
    featured: true,
  },
  {
    id: '3',
    title: 'Inca Legends',
    developer: 'Cusco Dev',
    developerId: 'dev-3',
    price: 14.99,
    image: '/games/inca-legends.jpg',
    rating: 4.9,
    reviews: 256,
    category: 'RPG',
    description: 'Un RPG épico basado en la mitología y cultura inca',
    releaseDate: '2024-03-10',
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

