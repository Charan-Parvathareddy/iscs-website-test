import AboutUs from '@/components/About/Aboutus'
import React from 'react'

function Home() {
  return (
    <div>
      
      <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: "url('/background-1.png')"
    }}>
      <AboutUs/>
      </div>
    </div>
  )
}

export default Home
