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
      src="https://www.youtube.com/embed/nz69VmtX1wU" 
      title="INDEPENDENT TV LIVE | ইনডিপেনডেন্ট টিভি লাইভ | সরাসরি ইনডিপেনডেন্ট টিভি | LIVE BANGLA TV | ITV LIVE" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen
      ></iframe>
      </div>
      <div className='live_contents'>
      <iframe className='custom-iframe' 
      src="https://www.youtube.com/embed/sXMYIedARHo" 
      title="JAMUNA TV LIVE | JTV LIVE | সরাসরি যমুনা টিভি | LIVE STREAMING | BANGLA TV LIVE | BD TV LIVE" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
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
      src="https://www.youtube.com/embed/FpF2eqAAeR0" 
      title="Channel i Live || Bangla tv News || Live Streaming || Live NOW" 
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
      <div className='live_contents'>
        <h2>TRT World Live</h2>
        <iframe 
        className='custom-iframe' 
        src="https://www.youtube.com/embed/5VF4aor94gw" 
        title="LIVE: Watch TRT World" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        ></iframe>
      </div>
      <div className='live_contents'>
        <h2>Feeling down? Listen Surah Ad-Duha</h2>
        <iframe 
        className='custom-iframe'
        src="https://www.youtube.com/embed/jbHQCbp86Kg" 
        title="Surah Ad-Duha - Mishary Alafasy" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
      <div className='live_contents'>
        <h2>Surah Ar-Rahman</h2>
        <iframe 
        className='custom-iframe'
        src="https://www.youtube.com/embed/tQHAwV9B8hQ" 
        title="Surah Ar-Rahman" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
      <div className='live_contents'>
        <h2>Surah Al-Kahf</h2>
        <iframe 
        className='custom-iframe'
        src="https://www.youtube.com/embed/SOB3wEIRul4" 
        title="Surah Al-Kahf" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
      <div className='live_contents'>
        <h2>Surah Yaseen</h2>
        <iframe 
        className='custom-iframe'
        src="https://www.youtube.com/embed/yMg4DXHQooc" 
        title="Surah Yaseen" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Live;