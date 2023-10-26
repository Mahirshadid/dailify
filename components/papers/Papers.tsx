import React from 'react'
import Image from 'next/image'
import './papers.css'

import pA from '../../public/prothomalo.png'
import pk from '../../public/purbokon.png'
const Papers = () => {
  return (
    <div className='papers section__padding' id='papers'>
      <div className='papers_contents'>
        <h2>Here, some newspapers on your plate.</h2>
        <div className='papers_contents-papers'>
          <div className='paper-cards'>
            <Image src={pA} style={{width:'180px',height:'100px'}} alt='' />
            <p><a href='https://www.prothomalo.com/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={pk} style={{width:'170px',height:'50px',marginBottom:'30px',marginTop:'20px'}} alt='' />
            <p><a href='https://dainikpurbokone.net/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            
          </div>
          <div className='paper-cards'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Papers