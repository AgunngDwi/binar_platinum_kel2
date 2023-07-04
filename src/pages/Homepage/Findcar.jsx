import React, { useState } from 'react'
import NavbarMain from '/src/components/Homepage/NavbarMain'
import HeroSection from '/src/components/Homepage/HeroSection'
import Footer from '/src/components/Homepage/Footer'
import SearchBar from '/src/components/Homepage/SearchBar'

const Findcar = () => {


  return (
    <div>
        <NavbarMain/>
        <HeroSection showButton={false}/>
        <SearchBar/>
        <Footer/>
    </div>
  )
}

export default Findcar