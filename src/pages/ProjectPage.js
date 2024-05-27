import React from 'react';
import './PageStyle/Project.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import github from '../assets/icons/github.png';
import illu from '../assets/icons/ai.png';
import visual from '../assets/icons/visual.png';
import render from '../assets/icons/render.png';
import react from '../assets/icons/react.png';
import indesign from '../assets/icons/id.png';
import photoshop from '../assets/icons/ps.png';
import driver from '../assets/icons/driver.png';
import notion from '../assets/icons/notion.png';
import postiqo from '../assets/icons/postiqo.png';
import discord from '../assets/icons/discord.png';

import divider from '../assets/Profilering/divider.png';
import mock4 from '../assets/Profilering/sdPho.png';
import arch from '../assets/misc/sdArch.png';

const Prosjekt = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/grafiskpage');
  };

  return (
    <div className="container">
      <h1 className='hero-header-sub'>- Prosjekt -</h1>

      <div className="bg-container">
        <img src={mock4} alt="background" className="bg-image" />
      </div>

      <div className="sod-container">
        <img src={divider} alt="divider" className="sdDivider" />
      </div>
      <div className='gap-adjuster'></div>


      <div className="additional-content">
        <h2>Bakgrunn</h2>
        <p>
          Bakgrunnen til oppgaven er en gammel kokebok som er på vei til å gå i oppløsning. Gruppen snakket sammen om en mulighet 
          for å digitalisere slike bøker som mest sannsynlig ligger hjemme hos de fleste. Gruppen har brukt mye tid på å finne gode 
          løsninger på utviklingen av en app som kan hjelpe alle og enhver med dette. 
        </p>
      </div>

      <div className="additional-content">
        <h2>Visuell Design</h2>
        <p>
          Det visuelle designet utgjør et sentralt trinn i utviklingen av en app og etableringen av appens merkevareidentitet. Det er gjennom det visuelle designet at appen får sitt unike utseende og følelse som skiller den fra konkurrentene og apper i lignende kategorier. Faktorer som fargevalg, typografi, ikoner, layout og generell estetikk spiller en avgjørende rolle i å forme brukerens opplevelse og oppfatning av appen. En gjennomtenkt og konsistent visuell profil styrker også merkevarens gjenkjennelse og skaper tillit hos brukerne. Gjennom kontinuerlig påfyll og iterasjon i det visuelle designet kan man sikre at appen forblir relevant og appellerende for målgruppen over tid, samtidig som den reflekterer appens evolusjon og vekst. <br></br><br></br>Sjekk ut vår visuelle profil:
        </p>
        <button className='vd-button' onClick={handleButtonClick}>Les mer</button>
      </div>

      <div className="additional-content">
        <h2>Implementering</h2>
      <p> Nettsiden og appen er utviklet ved hjelp av React, et av de mest populære JavaScript-bibliotekene for å lage moderne, responsivt og dynamisk innhold på nettet. Med React kan vi effektivt organisere koden vår i små, gjenbrukbare komponenter, noe som gjør det enkelt å vedlikeholde og skalere nettsiden over tid.
Vi har utnyttet React's tilstandshåndtering for å sikre at nettsiden vår oppdateres jevnt og raskt når brukeren samhandler med den. Dette gjør at vi kan levere en sømløs og responsiv brukeropplevelse uansett enhet eller nettleser som brukes.
Videre har vi implementert React-router for enkel navigering mellom forskjellige deler av nettsiden, og vi har integrert ulike tredjepartsbiblioteker og verktøy for å optimalisere ytelse og sikkerhet.

</p>

<p>Vi har også valgt Postiqo2 for å lagre og hente data i vår React mobil applikasjon. Dette gir oss pålitelig ytelse og sikkerhet. Med Postiqo2 kan vi strukturere og organisere dataene våre effektivt og tilby avanserte spørringsmuligheter. Dette sikrer en sømløs brukeropplevelse ved å presentere relevant innhold.

Ved å bruke React for frontenden og Postiqo2 for databasen, har vi en robust løsning for å bygge kraftige og responsive webapplikasjoner. 

</p>

<div className="bg-container">
        <img src={arch} alt="background" className="bg-image" />
      </div>
      <p className='q-txt'><strong>Har du spesifikke spørsmål om funksjonalitet, design eller noe annet relatert til <br></br> nettsiden eller appen vår? Kontakt: under info!</strong>  </p>


      </div>

      <h1 className='hero-card-header'>Verktøy</h1>

      <div className="workIcon-container">
        <img src={notion} alt="problem" className="helper-icon" />
        <img src={postiqo} alt="logo" className="helper-icon" />
        <img src={driver} alt="text" className="helper-icon" />
        <img src={visual} alt="mobin" className="helper-icon" />
        <img src={react} alt="mobin" className="helper-icon" />
        <img src={render} alt="mobin" className="helper-icon" />
        <img src={indesign} alt="mobin" className="helper-icon" />
        <img src={illu} alt="mobin" className="helper-icon" />
        <img src={photoshop} alt="mobin" className="helper-icon" />
        <img src={github} alt="mobin" className="helper-icon" />
        <img src={discord} alt="mobin" className="helper-icon" />

      </div>
    </div>
  );
};

export default Prosjekt;
