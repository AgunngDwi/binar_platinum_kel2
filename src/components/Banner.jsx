import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Banner = () => {

  return (
    <div className='banner-container'>
    <Container >
        <div className='banner-content'>
            <h1 className='banner-tittle'>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p className='banner-detail'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link to={'/cars'}><button className='banner-button'>Mulai Sewa Mobil</button></Link>
        </div>
    </Container>
    </div>
  )
}

export default Banner