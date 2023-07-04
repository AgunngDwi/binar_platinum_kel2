import NavbarMain from "/src/components/Homepage/NavbarMain"
import HeroSection from "/src/components/Homepage/HeroSection"
import WhyUs from "/src/components/Homepage/WhyUs"
import OurServices from "/src/components/Homepage/OurServices";
import Testimony from "/src/components/Homepage/Testimony";
import Banner from "/src/components/Homepage/Banner";
import Faq from "/src/components/Homepage/Faq";
import Footer from "/src/components/Homepage/Footer";
import React from 'react'
import "/src/css/Homepage/master.css"

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