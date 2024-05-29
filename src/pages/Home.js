import React from 'react';
import coverImage from '../comp/usCapture.png'; // Import the cover image
import additionalImage from '../assets/Profilering/sdQR.png'; // Import the additional image
import down from '../comp/download.png'; // Import the logo image
import camera from '../comp/camera.png'; // Import the logo image
import copy from '../comp/write.png'; // Import the logo image
import mascot from '../assets/Profilering/sdMasw.png';

import calculator from '../comp/cal.png'; // Import the logo image
import '../pages/PageStyle/Home.css';

const Home = () => {
  return (
    <div className="home-screen">
      <img src={coverImage} alt="Cover Image" className="cover-photo" />
      <div className="content">
        <h1 className="Home-title">ScanDish</h1>
        <p>What's cooking</p>
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

        </div>

        <img src={mascot} alt="mascot" className="mascot-image" />

        <h2 className='Global-H2'>Funksjonaliteter</h2>

        <div className="cards">
            
          {/* Card 1 */}
          <div className="card">
            <img src={camera} alt="Image" className="card-image" />
            <h3 className="card-title">Scan</h3>
            <p className="card-description">Med appen har vi gitt muligheten til å scanne oppskifter og tekster rett fra mobilen </p>
          </div>
          {/* Card 2 */}
          <div className="card">
            <img src={copy} alt="Image" className="card-image" />
            <h3 className="card-title">Noter</h3>
            <p className="card-description">Noter, lagre og organiser ned dine oppskirfter rett i appen.  </p>

          </div>
          {/* Card 3 */}
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
<p>  hjelp</p>

        

        </div>

      </div>
    </div>
  );
}

export default Home;
