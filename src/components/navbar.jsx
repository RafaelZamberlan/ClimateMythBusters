import React, { useState } from 'react';
import './navbar.css'; 
function Navbar() {
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <nav className="Navbar">
      <a className="menu-trigger" href="#"><i className="icon-menu"></i><span>Menu</span></a>
      <div className="menu-items">
        <a href="#">Sobre</a>
        <a href="#">Dados</a>
        <a href="#">Documentação</a>
        <a href="#">Portal de Pontos Focais</a>
        <a href="#">Portal do Bureau</a>
        <a href="#">Biblioteca</a>
        <a href="#">Links</a>
        <a href="#">Ajuda</a>
      </div>
      <div className="menu-languages">
        <h6 onClick={toggleLanguages}>Idiomas</h6>
        {showLanguages && (
          <ul>
            <li><a href="#">عربي</a></li>
            <li><a href="#">简体中文</a></li>
            <li><a href="#">Français</a></li>
            <li><a href="#">Русский</a></li>
            <li><a href="#">Español</a></li>
          </ul>
        )}
      </div>
      <div className="menu-search">
        <a href="#" className="overlay-trigger"><i className="icon-search"></i> <span>Pesquisar</span></a>
      </div>
    </nav>
  );
}

export default Navbar;
