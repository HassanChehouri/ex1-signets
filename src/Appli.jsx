import './Appli.scss';
import {useState} from 'react';
import Entete from './Entete.jsx';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

export default function Appli() {
  
  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeProduits />
      </section>
      <PiedDePage />
    </div>
  );
}