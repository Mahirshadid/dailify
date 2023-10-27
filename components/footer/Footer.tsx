import React from 'react'
import Image from 'next/image'
import './footer.css'

import logo from '../../public/text-logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_contents'>
        <a href='#'><Image src={logo} alt='' 
        style={{width:'15%',height:'15%',minWidth:'100px'}}/></a>
        <p><a href=''>Developer's Thoughts</a></p>
        <p>All Rights Reserved @ Mahir Shadid</p>
      </div>
    </div>
  )
}

export default Footer