import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-title">DSList PRO</div>
        <div className="home-main-title">Suas coleções do<br />jeito certo</div>
        <div className="home-description">
          Organize sua coleção de games de um jeito prático e divertido. Na verdade você vai aprender a criar este aplicativo e elevar seus conhecimentos para o próximo nível! :)
        </div>
        <Link to="/lists" className="start-button">Iniciar</Link>
      </div>
      <img src="/img/Gemini_Generated_Image_scurucscurucscur_-_Copia-removebg-preview.png" alt="Ilustração" className="home-image" />
    </div>
  );
}