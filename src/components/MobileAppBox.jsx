import React from 'react';
import icsocial from '../assets/images/icsocial-logo.webp'

const MobileAppBox = () => {
  return (
    <div className="mobile-app-box">
      <div className="mobile-app-bar">
        <div className="m-app-logo">
          <a href="#" className="app-bar-close">
            <i></i>
          </a>
          <span className="m-logo-icon">
            <img
              src={icsocial}
              alt="IC Social Logo"
              className="img-fluid"
            />
          </span>
          <div className="m-logo-txt">
            <h5>IC Social</h5>
            <h6>Download the App to enhance your trading experience.</h6>
          </div>
        </div>
        <a
          className="mobile-app-link"
          target="_blank"
          rel="noopener noreferrer"
          href="index.html#"
        >
          <span>INSTALL</span>
        </a>
      </div>
    </div>
  );
};

export default MobileAppBox;
