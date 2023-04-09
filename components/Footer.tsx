import Head from 'next/head';
import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = ({children }) => {
  return (
    <>
      <Head>
        <title>TypedNextCinema</title>
        <meta name="description" content="TypedNextCinema app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      <div className="inset-0 container m-2">
        <h1 
          style={{
            textAlign: "center",
            animation: "gradient-fade 1s ease-in-out infinite",
          }}
          className="text-8xl p-1 pb-4 pt-3  z-50 font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
            Typed Next Cinema
        </h1>
      </div>
      </header>
      <main>{children}</main>
      <footer className="footer p-10 bg-neutral text-neutral-content" style={{background: "black"}}>
          <div style={{position: 'relative', paddingTop: " ", fontSize:"large"}}>
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
    </>
  )
}
