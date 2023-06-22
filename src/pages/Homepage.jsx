import NavbarMain from "../components/NavbarMain"
import HeroSection from "../components/HeroSection"
import WhyUs from "../components/WhyUs"
import OurServices from "../components/OurServices";
import Testimony from "../components/Testimony";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import React from 'react'

const Homepage = () => {
  return (
    <div>
        <NavbarMain/>
        <HeroSection showButton={true}/>
        <OurServices/>
        <WhyUs/>
        <Testimony/>
        <Banner/>
        <Faq/>
        <Footer/>
    </div>
  )
}

export default Homepage