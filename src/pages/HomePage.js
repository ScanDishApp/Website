import React from 'react';
import './PageStyle/HomePage.css'; 
import coverImage from '../comp/foo.jpg'; 
import grams from '../comp/grams.png'; 
import camera from '../comp/camera.png'; 
import copy from '../comp/write.png'; 
import calculator from '../comp/cal.png'; 
import down from '../comp/download.png'; 
import pho from '../assets/Profilering/sdQR.png';

const HomePage = () => {
  return (
    <div className="container-first">
      <img src={coverImage} alt="Cover" className="cover-image" />
      <div className="overlay"></div>

      <h1 className='hero-header'>ScanDish</h1>
      <p className='info-header'>Whats cooking good lookin</p>
      <a href="https://scanbeta.onrender.com/" target="_blank" rel="noopener noreferrer">
      <button className='button-header'> Last ned</button>
      </a>
      <p className='divider'>ScanDish</p>

      <h1 className="hero-header-sub"> - Velkommen - </h1>

<div className="bg-container">
  <img src={pho} alt="background" className="bg-image" />

</div>

      <div className="additional-content">
        
        <p>Scandish er et bachelor prosjekt utført av: Stine Marie Kvist, Danny Nguyen Le og Kabi Mohamed - ved Universitetet i Agder.

        I forbindelse med bachelorprosjektet er det valgt å utvikle en moderne og brukervennlig oppskriftsapp ved bruk av React. Målet med prosjektet er å lage en helhetlig løsning som forenkler og forbedrer opplevelsen av å finne, organisere og dele oppskrifter.</p>

      <div>
<div className='spacer'></div>
      <img src={grams} alt="grandma" className="granny-image" />




        <h2>Funksjonaliteter</h2>
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




        <div className="additional-content">
        <h2>Instalasjon</h2>
        <a href="https://scanbeta.onrender.com/" target="_blank" rel="noopener noreferrer">
  <img src={down} alt='social' className='down-logo'/>
</a>


      </div>
      <div className='ins-down'>

<p>  1. Trykk på nedlasnings ikonet over   </p>
<p>  2. Vent til siden er lastet Informasjon</p>
<p>   3. Åpne innstillinger </p>
<p>   4. Last ned / legg til hjem-skjerm</p>
          
<p>   OBS. kan ta litt tid å laste inn</p>

        

        </div>


        
      </div>
    </div>
    </div>
  );
}

export default HomePage;
