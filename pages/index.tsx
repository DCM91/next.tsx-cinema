import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import HeaderLanding from '@/components/header'
import LandingCarousel from '@/components/FilmsCarousel'
import Films from '@/components/FetchAll'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Typed Next Cinema-Home</title>
      </Head>
      <HeaderLanding/>
      <LandingCarousel />
      <Films />
      <Footer/>
    </>
  )
}
