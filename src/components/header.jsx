import React from 'react'
import Buttons from './buttons'
import Logo from './logo'
import Nav from './nav'
import Hero from './hero'

const Hhead = () => {
  return (
    <header className="mb-8 flex items-center justify-between py-2 md:mb-12 md:py-2 xl:mb-16">
      <Logo />
      <Nav />
      <Buttons />
     


      
    </header>
  )
}

export default Hhead
