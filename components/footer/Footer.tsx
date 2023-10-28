"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './footer.css';
import logo from '../../public/text-logo.png';

const Footer = () => {
  const [showDeveloperThoughts, setShowDeveloperThoughts] = useState(false);

  const toggleDeveloperThoughts = () => {
    setShowDeveloperThoughts(!showDeveloperThoughts);
  };

  const closeDeveloperThoughts = () => {
    setShowDeveloperThoughts(false);
  };


  return (
    <div className="footer">
      <div className="footer_contents">
        <a href="#">
          <Image src={logo} alt="" style={{ width: '15%', height: '15%', minWidth: '100px' }} />
        </a>
        <p>
          <button type="button" onClick={toggleDeveloperThoughts}>
            Developers Thought
          </button>
        </p>
        <p>All Rights Reserved @ Mahir Shadid</p>
      </div>
      <div className={`slide-top footer_dev_t${showDeveloperThoughts ? ' visible' : ''}`}>
        <button type="button" className="close-button" onClick={closeDeveloperThoughts}>
          &#10006;
        </button>
        <h4>Hi, I am Mahir.</h4>
        <p>
          I have created it for my project purpose. But tried to make it usable.
          Will update it further if I get interests from people. If the Salat times help you in some way,
          I'll receive some deeds also.
        </p>
        <h4>
          If the app helps you, buy me a treat :-D My phone is 01888504938. I only have Bkash. Thank you!
        </h4>
      </div>
    </div>
  );
};

export default Footer;
