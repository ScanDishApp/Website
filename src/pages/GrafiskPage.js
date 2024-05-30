import React, { useState } from 'react';
import './PageStyle/GrafiskPage.css'; 
import '../pages/PageStyle/Global.css';
import background from '../assets/Profilering/Sdbg.png';
import Logo from '../assets/Profilering/sdLogo.png';
import Text from '../assets/Profilering/sdCol.png';

import Mobin from '../assets/Profilering/sdMobile.png';
import Problem from '../assets/Profilering/sdProb.png';
import Rainbow from '../assets/Profilering/sdRain.png';
import skjermer from '../assets/Profilering/sd15s.png';

import Credit from '../assets/Profilering/sdCredit.png';
import Mock1 from '../assets/Profilering/sdMock.png';
import Mock3 from '../assets/Profilering/sdMock3.png';
import Mock5 from '../assets/Profilering/sdMockup5.png';
import Mock6 from '../assets/Profilering/sdMock6.png';
import Mock7 from '../assets/Profilering/sdMock7.png';
import Mock8 from '../assets/Profilering/sdHatt1.png';
import Mock9 from '../assets/Profilering/sdHatt2.png';
import Mock10 from '../assets/Profilering/sdMock8.png';
import Mock11 from '../assets/Profilering/SDmock11.png';
import Mock12 from '../assets/Profilering/sdTC.png';

import sdFooter from '../assets/Profilering/sdFooterCredit.png';
import mascot from '../assets/Profilering/sdMasc.png';
import divider from '../assets/Profilering/divider.png';


const Visuell = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

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


      <div className='gapper'></div>


      <div className="vis-container">

        <img src={Problem} alt="problem" className="sd-image" />
        <img src={Logo} alt="logo" className="sd-image" />
        <img src={Text} alt="text" className="sd-image" />
        <img src={mascot} alt="mascot" className="sd-image" />

        <img src={Rainbow} alt="mock" className="sd-image" />
        <img src={Mock8} alt="mock" className="sd-image" />
        <img src={Mock9} alt="mock" className="sd-image" />
        <img src={Mock11} alt="mock" className="sd-image" />

        <img src={Mobin} alt="mobin" className="sd-image" />
        <img src={Credit} alt="credit" className="sd-image" />
        <img src={skjermer} alt="credit" className="sd-image" />

        <img src={Mock1} alt="mock" className="sd-image" />
        <img src={Mock3} alt="mock" className="sd-image" />
        <img src={Mock5} alt="mock" className="sd-image" />
        <img src={Mock6} alt="mock" className="sd-image" />
        <img src={Mock10} alt="mock" className="sd-image" />

        <img src={Mock7} alt="mock" className="sd-image" />
        <img src={Mock12} alt="mock" className="sd-image" />

        <img src={sdFooter} alt="footer" className="sd-image" />

      </div>


            <div className="additional-content">
            <div className='dropdown-container'>
      <div className="custom-dropdown">
        <div className="dropdown-header" onClick={() => setShowDropdown(!showDropdown)}>
          <span>{selectedOption || '> Vedlegg <'}</span>
          <i className={`arrow-icon ${showDropdown ? 'up' : 'down'}`}></i>
        </div>
        {showDropdown && (
          <div className="dropdown-options">
            <div className="vp-info" onClick={() => handleOptionClick('Vedlegg')}>
              <br></br>
            <a href="https://drive.google.com/file/d/1cgD867DMmJ7Ss6vM3wrpNum6DKNwLnvM/view?usp=sharing" class="custom-link" target="_blank">Designhåndbok</a>
            <br></br>              <br></br>


            <a href="https://drive.google.com/file/d/1cgD867DMmJ7Ss6vM3wrpNum6DKNwLnvM/view?usp=sharing" class="custom-link" target="_blank">Designhåndbok</a>

            </div>
          </div>

        )}
      <div className='bottom-spacer'>      </div>


      </div>
      </div>

        </div>


    </div>
  );
};

export default Visuell;
