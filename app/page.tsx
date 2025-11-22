import { Hero } from '@/components/home/Hero'
import { FeaturedGames } from '@/components/home/FeaturedGames'
import { Categories } from '@/components/home/Categories'
import { TrendingGames } from '@/components/home/TrendingGames'
import { NewReleases } from '@/components/home/NewReleases'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto px-4 py-12 space-y-16">
        <FeaturedGames />
        <Categories />
        <TrendingGames />
        <NewReleases />
      </div>
    </div>
  )
}

