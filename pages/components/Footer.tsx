import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
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
  )
}
