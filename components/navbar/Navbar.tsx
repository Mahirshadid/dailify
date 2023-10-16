import React from 'react'
import Image from 'next/image'
import './navbar.css'

import textlogo from '../../public/text-logo.png' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar_logo scale-up-hor-left'>
        <a href='#'><Image src={textlogo} alt='' 
        style={{width:'20%',height:'20%',minWidth:'100px'}}/></a>
      </div>
      <div className='navbar_links'>
        <p><a href='#times'>Times</a></p>
        <p><a href='#papers'>Papers</a></p>
      </div>
    </div>
  )
}

export default Navbar