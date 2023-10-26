import React from 'react';
import './live.css'

const Live: React.FC = () => {
  return (
    <div className='live section__padding' id='live'>
      <div className='live_contents'>
        <h2>Live TVs!</h2>
        <iframe 
        className='custom-iframe'
        src="https://www.youtube.com/embed/wMNDhXcjtDo" 
        title="SOMOY TV LIVE | সময় টিভি লাইভ" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        ></iframe>
      </div>
      <div className='live_contents'>
        <iframe 
        className='custom-iframe' 
        src="https://www.youtube.com/embed/Ko8uFL2UG4E" 
        title="Ekattor TV Live" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        ></iframe>
      </div>
      <div className='live_contents'>
        <iframe className='custom-iframe'
        src="https://www.youtube.com/embed/F_yTmlDd7Uc" 
        title="JAMUNA TV LIVE" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        ></iframe>
      </div>
      <div className='live_contents'>
        <iframe 
        className='custom-iframe' 
        src="https://www.youtube.com/embed/8zAz3IlMzj8" 
        title="NTV Live" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        ></iframe>
      </div>
      <div className='live_contents'>
      <iframe  
      className='custom-iframe' 
      src="https://www.youtube.com/embed/5JdZ9gMjE_I" 
      title="BanglaVision LIVE | বাংলাভিশন লাইভ | Live TV Streaming | 24/7 Live TV" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
      </div>
      <div className='live_contents'>
        <h2>Al Jazeera Live</h2>
        <iframe 
        className='custom-iframe'
        src="https://www.youtube.com/embed/gCNeDWCI0vo" 
        title="🔴 Al Jazeera English | Live" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Live;
