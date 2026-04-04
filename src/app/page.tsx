import Hero from '@/components/home/Hero'
import BrandStory from '@/components/home/BrandStory'
import WhySoluna from '@/components/home/WhySoluna'
import Rooms from '@/components/home/Rooms'
import Cafe from '@/components/home/Cafe'
import Reviews from '@/components/home/Reviews'
import BookingCTA from '@/components/home/BookingCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandStory />
      <WhySoluna />
      <Rooms />
      <Cafe />
      <Reviews />
      <BookingCTA />
    </>
  )
}
