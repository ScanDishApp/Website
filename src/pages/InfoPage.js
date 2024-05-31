import React from 'react';
import './PageStyle/InfoPage.css'; 

import insta from '../comp/instagram.png'
import linked from '../comp/linkedin.png'
import team from '../assets/misc/team.png';

import kabi from '../assets/brown.png'
import danny from '../assets/dan.png'
import stine from '../assets/ice.png'
import email from '../assets/icons/mail.png'
const Team = () => {
  return (
    <div className="container">
      <h1 className='hero-header-sub'>Team</h1>
      <div className="bg-container">
        <img src={team} alt="background" className="bg-image" />
      </div>

      <div className="cards-info">
        <div className="card-info">
          <img src={stine} alt="Card 1" className="card-image-info"/>
          <h2>Stine M. Kvist</h2>
          <a href="https://www.instagram.com/stine_kvist_/" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt='social' className='social logo'/>
          </a>
          <a href="https://www.linkedin.com/in/stine-kvist/" target="_blank" rel="noopener noreferrer">
          <img src={linked}alt='social' className='social logo'/>
          <a href="mailto:stikvi@gmail.com" alt="email" target="_blank" rel="noopener noreferrer">
          <img src={email} alt='social' className='social logo'/>
        </a>
        </a>
        </div>

        <div className="card-info">
          <img src={kabi} alt="Card 3" className="card-image-info"/>
          <h2>Kabi Mohamed</h2>
          <a href="https://www.instagram.com/xi_teka_kabi/" alt='social' target="_blank" rel="noopener noreferrer">
          <img src={insta} alt='social' className='social logo'/>
          </a>
          <a href="https://www.linkedin.com/in/kabi-mohamed/" target="_blank" rel="noopener noreferrer">
          <img src={linked} alt='social' className='social logo'/>
        </a>
        <a href="mailto:kabim01@yahoo.com" alt="email" target="_blank" rel="noopener noreferrer">
          <img src={email} alt='social' className='social logo'/>
        </a>
        </div>


        <div className="card-info">
  <img src={danny} alt="Card 2" className="card-image-info"/>
          <h2>Danny N. Le</h2>
          <a href="https://www.instagram.com/dvnnyle/"alt='social' target="_blank" rel="noopener noreferrer">
          <img src={insta} alt='social' className='social logo'/>
          </a>
          <a href="https://www.instagram.com/dvnnyle/" alt='social' target="_blank" rel="noopener noreferrer">
          <img src={linked} alt='social' className='social logo'/>
        </a>
        <a href="mailto:dannyleyen@gmail.com" alt="email" target="_blank" rel="noopener noreferrer">
          <img src={email} alt='social' className='social logo'/>
        </a>
        </div>
   
        
      </div>
      
      <div className="additional-content">
        <h2>Kontakt</h2>

        <p>  <a className='mail-link' href="mailto:scandishapp@gmail.com"> scandishapp@gmail.com</a></p>

        <div className='bottom-spacer'> </div>

      </div>
      
    </div>
    
  );
};

export default Team;
