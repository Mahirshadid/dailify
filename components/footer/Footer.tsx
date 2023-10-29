"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './footer.css';
import logo from '../../public/text-logo.png';

const Footer = () => {
  const [showDeveloperThoughts, setShowDeveloperThoughts] = useState(false);
  const [buttonText, setButtonText] = useState('Copy');

  const toggleDeveloperThoughts = () => {
    setShowDeveloperThoughts(!showDeveloperThoughts);
  };

  const closeDeveloperThoughts = () => {
    setShowDeveloperThoughts(false);
  };

  const handleCopy = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setButtonText('Copied');
  };

  return (
    <div className="footer">
      <div className="footer_contents">
        <a href="#">
          <Image src={logo} alt="" style={{ width: '15%', height: '15%', minWidth: '100px' }} />
        </a>
        <p>
          <button type="button" onClick={toggleDeveloperThoughts} className='dtbtn color-change-2x'>
            Developers Thought
          </button>
        </p>
        <p>All Rights Reserved @ Mahir Shadid</p>
      </div>
      <div className={`slide-top footer_dev_t${showDeveloperThoughts ? ' visible' : ''}`}>
        <button type="button" className="close-button" onClick={closeDeveloperThoughts}>
          &#10006;
        </button>
        <h4>Assalamu Alaikum, I am Mahir.</h4>
        <p>
          I have created it for my project purpose. But tried to make it usable.
          Will update it further if I get interests from people. If the app help you in some way,
          I'll receive some deeds also.
        </p>
        <h4>
          If the app helps you, buy me a treat through Bkash :-D Copy my phone number, click here {'->'} <button type='button'
          className='copybtn'
          onClickCapture={() => handleCopy('01888504938')}>{buttonText}</button> <br/> Thank you!
        </h4>
      </div>
    </div>
  );
};

export default Footer;
