'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Download, Heart, Share2, Play, Check } from 'lucide-react'
import { Game } from '@/types/game'

// Mock data - en producción vendría de la API
const mockGame: Game = {
  id: '1',
  title: 'Machu Picchu Quest',
  developer: 'Lima Games',
  developerId: 'dev-1',
  price: 9.99,
  originalPrice: 14.99,
  image: '/games/machu-picchu.jpg',
  screenshots: [
    '/games/machu-picchu-1.jpg',
    '/games/machu-picchu-2.jpg',
    '/games/machu-picchu-3.jpg',
  ],
  video: '/games/machu-picchu-trailer.mp4',
  rating: 4.8,
  reviews: 124,
  category: 'Aventura',
  tags: ['Perú', 'Historia', 'Exploración', 'Cultura'],
  description: 'Embárcate en una aventura épica por las ruinas de Machu Picchu',
  longDescription: 'Machu Picchu Quest es un juego de aventura que te lleva a través de las misteriosas ruinas incas. Descubre secretos antiguos, resuelve puzzles desafiantes y explora la rica historia del Perú.',
  featured: true,
  releaseDate: '2024-01-15',
  size: '2.5 GB',
  requirements: {
    minimum: 'Windows 10, 4GB RAM, DirectX 11',
    recommended: 'Windows 11, 8GB RAM, DirectX 12',
  },
  supportedPlatforms: ['Windows', 'macOS', 'Linux'],
  isPeruvian: true,
  culturalTags: ['Inca', 'Machu Picchu', 'Historia Peruana'],
}

export default function GameDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-video bg-neutral-200 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-neutral-400">Imagen principal del juego</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {mockGame.screenshots?.map((screenshot, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video bg-neutral-200 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary-500'
                        : 'border-transparent hover:border-neutral-300'
                    }`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-neutral-400">Screenshot {index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  {mockGame.isPeruvian && (
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      🇵🇪 Hecho en Perú
                    </span>
                  )}
                  <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-semibold rounded-full">
                    {mockGame.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
                  {mockGame.title}
                </h1>
                <p className="text-lg text-neutral-600">{mockGame.developer}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(mockGame.rating)
                            ? 'fill-accent-500 text-accent-500'
                            : 'text-neutral-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-neutral-900">
                    {mockGame.rating}
                  </span>
                </div>
                <span className="text-neutral-500">
                  ({mockGame.reviews} reseñas)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-4xl font-bold text-neutral-900">
                  S/ {mockGame.price.toFixed(2)}
                </span>
                {mockGame.originalPrice && (
                  <span className="text-xl text-neutral-400 line-through">
                    S/ {mockGame.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center space-x-2 px-8 py-4 bg-primary-500 text-white rounded-2xl hover:bg-primary-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <Download className="w-5 h-5" />
                  <span>Comprar Ahora</span>
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`px-6 py-4 border-2 rounded-2xl transition-all ${
                    isWishlisted
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted ? 'fill-primary-500 text-primary-500' : ''
                    }`}
                  />
                </button>
                <button className="px-6 py-4 border-2 border-neutral-200 rounded-2xl hover:border-primary-300 transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {mockGame.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section className="bg-white rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Acerca de este juego</h2>
              <p className="text-neutral-600 leading-relaxed">{mockGame.longDescription}</p>
            </section>

            {/* Screenshots */}
            <section className="bg-white rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Capturas de Pantalla</h2>
              <div className="grid grid-cols-2 gap-4">
                {mockGame.screenshots?.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative aspect-video bg-neutral-200 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm text-neutral-400">Screenshot {index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-2xl p-8 shadow-card">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Reseñas</h2>
              <div className="space-y-4">
                {/* Mock review */}
                <div className="border-b border-neutral-100 pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">Juan Díaz</p>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < 5 ? 'fill-accent-500 text-accent-500' : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-neutral-600">
                    Excelente juego! La representación de Machu Picchu es increíble. Muy recomendado.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-bold text-neutral-900 mb-4">Información</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Desarrollador</span>
                  <span className="font-semibold text-neutral-900">{mockGame.developer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Fecha de lanzamiento</span>
                  <span className="font-semibold text-neutral-900">
                    {new Date(mockGame.releaseDate).toLocaleDateString('es-PE')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Tamaño</span>
                  <span className="font-semibold text-neutral-900">{mockGame.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Plataformas</span>
                  <span className="font-semibold text-neutral-900">
                    {mockGame.supportedPlatforms?.join(', ')}
                  </span>
                </div>
              </div>
            </div>

            {/* Requirements */}
            {mockGame.requirements && (
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-bold text-neutral-900 mb-4">Requisitos del Sistema</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">Mínimos</p>
                    <p className="text-neutral-600">{mockGame.requirements.minimum}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">Recomendados</p>
                    <p className="text-neutral-600">{mockGame.requirements.recommended}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

