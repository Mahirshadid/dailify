import React from 'react'
import Image from 'next/image'
import './papers.css'

import pA from '../../public/prothomalo.png'
import pk from '../../public/purbokon.png'
import iF from '../../public/ittefaq.svg'
import kk from '../../public/kalerkantho.webp'

import nd from '../../public/nayadiganta.png'
import bp from '../../public/bdprotidin.webp'
import sg from '../../public/sangram.jpg'
import inq from '../../public/inqilab.webp'

import ds from '../../public/dailystar.svg'
import dt from '../../public/dhakat.png'
import dobs from '../../public/dailyobs.png'
import bs from '../../public/business.svg'

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
            <Image src={iF} style={{width:'170px',height:'50px',marginBottom:'30px',marginTop:'20px'}} alt='' />
            <p><a href='https://www.ittefaq.com.bd/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={kk} style={{width:'170px',height:'50px',marginBottom:'30px',marginTop:'20px'}} alt='' />
            <p><a href='https://www.kalerkantho.com/' target='_blank'>Visit</a></p>
          </div>
        </div>
        <div className='papers_contents-papers'>
          <div className='paper-cards'>
            <Image src={nd} style={{width:'150px',height:'60px'}} alt='' />
            <p style={{marginTop:'40px'}}><a href='https://www.dailynayadiganta.com/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={bp} style={{width:'170px',height:'50px',marginBottom:'30px',marginTop:'20px'}} alt='' />
            <p><a href='https://www.bd-pratidin.com/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={sg} style={{width:'170px',height:'50px',marginBottom:'30px',marginTop:'20px'}} alt='' />
            <p><a href='https://dailysangram.com/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={inq} style={{width:'170px',height:'50px',marginBottom:'30px',marginTop:'20px'}} alt='' />
            <p><a href='https://dailyinqilab.com/' target='_blank'>Visit</a></p>
          </div>
        </div>
        <h2 style={{marginTop:'30px',marginBottom:'30px'}}>How about some English?</h2>
        <div className='papers_contents-papers'>
          <div className='paper-cards'>
            <Image src={ds} style={{width:'150px',height:'60px',marginTop:'10px'}} alt='' />
            <p style={{marginTop:'30px'}}><a href='https://www.thedailystar.net/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={dt} style={{width:'170px',height:'30px',marginBottom:'30px',marginTop:'25px'}} alt='' />
            <p style={{marginTop:'15px'}}><a href='https://www.dhakatribune.com/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={dobs} style={{width:'170px',height:'30px',marginBottom:'30px',marginTop:'30px'}} alt='' />
            <p style={{marginTop:'10px'}}><a href='https://observerbd.com/' target='_blank'>Visit</a></p>
          </div>
          <div className='paper-cards'>
            <Image src={bs} style={{width:'170px',height:'50px',marginBottom:'25px',marginTop:'10px',backgroundColor:'black',padding:'0.5rem',borderRadius:'12px'}} alt='' />
            <p><a href='https://www.tbsnews.net/' target='_blank'>Visit</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Papers