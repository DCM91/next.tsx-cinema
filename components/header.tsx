import React from 'react'

export default function HeaderLanding() {
  return (
    <>
      <div className="inset-0 container mx-auto">
        <h1 
          style={{
            textAlign: "center",
            animation: "gradient-fade 1s ease-in-out infinite",
          }}
          className="text-8xl p-1 pb-4 pt-3  z-50 font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
            Typed Next Cinema
        </h1>
      </div>
      <div className='scale-y-75'>
       <img src="https://www.viva-media.ca/wp-content/uploads/header-culture-cinema.jpg" alt="" className=" w-full h-85"/>
      </div>
    </>
  )
}
