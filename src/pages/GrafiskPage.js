import React, { useState } from 'react';
import './PageStyle/ContactPage.css'; // Import the CSS file
import './PageStyle/GrafiskPage.css'; // Import the CSS file
import '../pages/PageStyle/Global.css';
import background from '../assets/Profilering/Sdbg.png';
import Logo from '../assets/Profilering/sdLogo.png';
import Text from '../assets/Profilering/sdCol.png';

import Mobin from '../assets/Profilering/sdMobile.png';
import Problem from '../assets/Profilering/sdProb.png';
import Rainbow from '../assets/Profilering/sdRain.png';

import Credit from '../assets/Profilering/sdCredit.png';
import Mock1 from '../assets/Profilering/sdMock.png';
import Mock3 from '../assets/Profilering/sdMock3.png';
import Mock5 from '../assets/Profilering/sdMockup5.png';
import Mock6 from '../assets/Profilering/sdMock6.png';

import divider from '../assets/Profilering/divider.png';


const Visuell = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  // Handler function to handle dropdown option click
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <div className="container">
      <h1 className="hero-header-sub"> - Visuell Profil - </h1>

      <div className="bg-container">
        <img src={background} alt="background" className="bg-image" />
      </div>

      <div className="sod-container">
        <img src={divider} alt="divider" className="sdDivider" />
      </div>
      <div className='gapper'></div>

      
      <div className="sd-container">
        <img src={Problem} alt="problem" className="sd-image" />
        <img src={Logo} alt="logo" className="sd-image" />
        <img src={Text} alt="text" className="sd-image" />
        <img src={Rainbow} alt="mock" className="sd-image" />

        <img src={Mobin} alt="mobin" className="sd-image" />
        <img src={Credit} alt="credit" className="sd-image" />
        <img src={Mock1} alt="mock" className="sd-image" />
        <img src={Mock3} alt="mock" className="sd-image" />
        <img src={Mock5} alt="mock" className="sd-image" />
        <img src={Mock6} alt="mock" className="sd-image" />

      </div>


            <div className="additional-content">
        <h2>Last ned Visuell Profil</h2>
        
    <ul>
    </ul>
        </div>


<div className='dropdown-container'>
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={() => setShowDropdown(!showDropdown)}>
          <span>{selectedOption || '> Informasjon <'}</span>
          <i className={`arrow-icon ${showDropdown ? 'up' : 'down'}`}></i>
        </div>
        {showDropdown && (
          <div className="dropdown-options">
            <div className="vp-info" onClick={() => handleOptionClick('info')}>
              <p>Grafisk profil, designet for utviklingen av ScanDish mobil app og nettside</p>
              <p>Designet i Figma & Adobe Illustrator</p>
              <p>- ScanDish -</p>
            </div>
          </div>

        )}
      <div className='bottom-spacer'>      </div>


      </div>
      </div>
    </div>
  );
};

export default Visuell;
