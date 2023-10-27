import React from 'react'
import './links.css'

const Links = () => {
  return (
    <div className='links section__padding' id='links'>
        <h2>Some resources for you.</h2>
        <div className='links_contents'>
            <h3>Searching for Quran? <a className='color-change-2x' href='https://quran.com/' target='_blank'>Visit this</a></h3>
            <h3>Searching for Hadith? <a className='color-change-2x' href='https://hadith.com/' target='_blank'>Visit this</a></h3>
            <h3>এগুলো বাংলায় চান? <a className='color-change-2x' href='https://www.hadithbd.com/quran/' target='_blank'>এখানে ক্লিক করুন</a></h3>
        </div>
    </div>
  )
}

export default Links