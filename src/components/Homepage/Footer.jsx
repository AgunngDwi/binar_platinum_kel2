import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer-container'>
    <Container >
        <div className='footer-address'>
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
        </div>
        <div className='footer-menu'>
            <a href="">Our Service</a>
            <a href="">Why us</a>
            <a href="">Testimonial</a>
            <a href="">FAQ</a>
        </div>
        <div className='footer-media'>
            <div className='media-tittle'>
                <p>Connect with us</p>
            </div>
            <div className='media-icon'>
                <a href=""><img src="/src/assets/icon/social/icon_facebook.svg" alt="" /></a>
                <a href=""><img src="/src/assets/icon/social/icon_instagram.svg" alt="" /></a>
                <a href=""><img src="/src/assets/icon/social/icon_twitter.svg" alt="" /></a>
                <a href=""><img src="/src/assets/icon/social/icon_mail.svg" alt="" /></a>
                <a href=""><img src="/src/assets/icon/social/icon_twitch.svg" alt="" /></a>
            </div>
        </div>
        <div className='footer-logo'>
            <p>Copyright Binar 2022</p>
            <h1 className='logo-footer'></h1>
        </div>
    </Container>
    </div>
  )
}

export default Footer