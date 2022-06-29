import React from 'react';
import './header.css';
import CTA from './CTA'
import Profile from '../../assets/me.png';
import SocialNetwork from './HeaderSocials'


const Header = () => {
  return (
    <header className='header-main'>
      <div className='container header_container'>
        <h5>Welcome my Name is</h5>
        <h1>Cristian Giovanni Estrada Ramirez</h1>
        <h5 className='text-light'>Junior Web Developer</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header