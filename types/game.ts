export interface Game {
  id: string
  title: string
  developer: string
  developerId: string
  price: number
  originalPrice?: number
  image: string
  screenshots?: string[]
  video?: string
  rating: number
  reviews: number
  category: string
  tags?: string[]
  description: string
  longDescription?: string
  featured?: boolean
  releaseDate: string
  size?: string
  requirements?: {
    minimum?: string
    recommended?: string
  }
  supportedPlatforms?: string[]
  isPeruvian?: boolean
  culturalTags?: string[]
}

export interface Review {
  id: string
  userId: string
  userName: string
  userAvatar?: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

