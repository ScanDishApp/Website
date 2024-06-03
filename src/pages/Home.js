import React from 'react';
import { useNavigate } from 'react-router-dom';

import coverImage from '../comp/usCapture.png'; 
import additionalImage from '../assets/Profilering/sdQR.png'; 
import camera from '../comp/camera.png'; 
import copy from '../comp/write.png'; 
import mascot from '../assets/Profilering/Maskotter.png';
import nlBanner from '../assets/Profilering/NLbanner.png';
import banner22 from '../assets/Profilering/banner22.png';
import banner23 from '../assets/Profilering/banner23.png';


import calculator from '../comp/cal.png'; 
import '../pages/PageStyle/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavDownload = () => {
    navigate('/LastNed');
  };
  const handleNavVisuell = () => {
    navigate('/Visuell');
  };
  const handleNavPro = () => {
    navigate('/prosjekt');
  };

  return (
    <div className="home-screen">
      <img src={coverImage} alt="Cover Image" className="cover-photo" />
      <div className="content">
        <h1 className="Home-title">ScanDish</h1>
        <p className='Home-sub'>What's cooking, good lookin ;</p>
        <a href="https://scanbeta.onrender.com/" target="_blank" rel="noopener noreferrer">
      <button className='button-cover'> Last ned</button>
      </a>
      </div>
      
      <h1 className="hero-header-sub"> - Velkommen - </h1>
      <div className='container'>
        <div className='new-content'>
          <img src={additionalImage} alt="Additional Image" className="additional-image" />
        </div>
        <div className="additional-content">
        
        <p>Scandish er et bachelor prosjekt utført av: Stine Marie Kvist, Danny Nguyen Le og Kabi Mohamed - ved Universitetet i Agder.

        I forbindelse med bachelorprosjektet er det valgt å utvikle en moderne og brukervennlig oppskriftsapp ved bruk av React. Målet med prosjektet er å lage en helhetlig løsning som forenkler og forbedrer opplevelsen av å finne, organisere og dele oppskrifter.</p>

      <p>
      Bakgrunnen til oppgaven er en gammel kokebok som er på vei til å gå i oppløsning. Gruppen snakket sammen om en mulighet 
          for å digitalisere slike bøker som mest sannsynlig ligger hjemme hos de fleste. Gruppen har brukt mye tid på å finne gode 
          løsninger på utviklingen av en app som kan hjelpe alle og enhver med dette. 
      </p>
        </div>

        <img src={nlBanner} alt="mascot" className="button-image" onClick={handleNavDownload}/>
        <img src={banner23} alt="mascot" className="button-image" onClick={handleNavVisuell}/>
        <img src={banner22} alt="mascot" className="button-image" onClick={handleNavPro}/>

        <img src={mascot} alt="mascot" className="mascot-image" />

        <h2 className='Global-H2'>Funksjonaliteter</h2>

        <div className="cards">
            
          <div className="card">
            <img src={camera} alt="Image" className="card-image" />
            <h3 className="card-title">Scan</h3>
            <p className="card-description">Med appen har vi gitt muligheten til å scanne oppskifter og tekster rett fra mobilen </p>
          </div>
          <div className="card">
            <img src={copy} alt="Image" className="card-image" />
            <h3 className="card-title">Noter</h3>
            <p className="card-description">Noter, lagre og organiser ned dine oppskirfter rett i appen.  </p>

          </div>
          <div className="card">
            <img src={calculator} alt="Image" className="card-image" />
            <h3 className="card-title">Verktøy</h3>
            <p className="card-description">I appen finner du verktøy som tempertur -og enehetskonversjon som kan gjøre matlagingen lettere. </p>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
