import React, { useState } from 'react'
import NavbarMain from '../components/NavbarMain'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'

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