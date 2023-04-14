import React from 'react'
import Buttons from './buttons'
import Logo from './logo'
import Nav from './nav'
import Hero from './hero'

const Hhead = () => {
  return (
    <header className=" flex items-center justify-between py-2 ">
      <Logo />
      <Nav />
      <Buttons />
     


      
    </header>
  )
}

export default Hhead
