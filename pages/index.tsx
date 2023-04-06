import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Typed Next Cinema-Home</title>
      </Head>
      <div className='w-full h-52'><h1 className="text-red-800">GROOOOOOOOOOOt</h1></div>
      <Footer />
    </>
  )
}
