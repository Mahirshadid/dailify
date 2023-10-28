import React from 'react'
import Image from 'next/image'
import './hero.css'

import heroimg from '../../public/heroimg.jpg'

const Hero = () => {
  return (
    <div className='hero section__padding'>
      <div className='hero_contents'>
        <div className='hero_contents-text'>
          <h1 className='focus-in-contract '>What is Dailify?</h1>
          <h3 className='focus-in-contract '>Assalamu Alaikum, I am a web app, made
            out of a simple idea to provide a bit of help
            in life of you. Explore me, you'll figure
            me out!
          </h3>
        </div>
        <div className='hero_contents-img'>
          <Image src={heroimg} alt='' 
          style={{width:'100%',height:'90%',
          minWidth:'200px',minHeight:'200px'}} />
        </div>
      </div>
    </div>
  )
}

export default Hero