import Head from 'next/head';
import {ReactNode} from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

interface LayoutProps {
  children: ReactNode;
  title?: string
}


export const Footer = ({title = "TypedNextCinema" , children}: LayoutProps) => {
  return (
    <div className='flex flex-col h-fit'>
      <Head>
        <title>{title}</title>
        <meta name="description" content="TypedNextCinema app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header>
      <div className="inset-0 grid text-center w-100  mt-0 mb-o">
        <h1 
          style={{
            animation: "gradient-fade 1s ease-in-out infinite",
          }}
          className="text-7xl p-1 pb-3  w-100 font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
            Typed Next Cinema
        </h1>
      </div>
      </header>

      <main className='flex-1'>{children}</main>


      <footer className="footer p-8 py-6 bg-neutral text-neutral-content" style={{background: "black"}}>
          <div style={{position: 'relative', fontSize:"large"}}>
              <p><br/>El código de esta aplicación está disponible, lo que significa que puedes copiar y manipular el código libremente.<br/> <br/> Agradecería  una mención si utilizas este código</p>
          </div> 
          <div>
              <span className="footer-title" style={{fontSize:"large"}}>Social &nbsp; /DCM91</span> 
              <div className="grid grid-flow-col gap-4">
              <a href='https://www.linkedin.com/in/dcm91'><svg style={{width:"4rem", height:"4rem"}}  viewBox="0 0 24 24" className="fill-current"><BsLinkedin /></svg></a>
              <a href='https://github.com/DCM91'><svg style={{width:"4rem", height:"4rem"}}  viewBox="0 0 24 24" className="fill-current"><BsGithub /></svg></a>
              </div>
          </div>
      </footer>
    </div>
  )
}
