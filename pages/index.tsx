import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import HeaderLanding from '@/components/header'
import LandingCarousel from '@/components/FilmsCarousel'
import Films from '@/components/FetchAll'
import { title } from "@/typesApp";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Footer title = "TypedNextCinema-home" >
      <HeaderLanding/>
      <LandingCarousel />
      <Films />
      
    </Footer>
  )
}
