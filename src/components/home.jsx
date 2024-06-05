import React from 'react';
import './home.css'; // Importe os estilos CSS da Home

function Home() {
  return (
    <div className="Home">
      <header className="Header">
        <h1>Bem-vindo ao Climate Myth Busters</h1>
        <p>Nesta página, vamos desmascarar mitos sobre mudanças climáticas.</p>
      </header>
      <section className="Features">
        <div className="Feature">
          <h2>Impacto das atividades humanas no clima</h2>
          <p>Descubra como as atividades humanas afetam o clima global e as consequências para o planeta.</p>
        </div>
        <div className="Feature">
          <h2>Efeito estufa e gases de efeito estufa</h2>
          <p>Entenda o que é o efeito estufa, quais são os gases de efeito estufa e seu papel nas mudanças climáticas.</p>
        </div>
        <div className="Feature">
          <h2>Variações naturais do clima</h2>
          <p>Explore as variações naturais do clima ao longo da história e seu impacto nas mudanças climáticas atuais.</p>
        </div>
        <div className="Feature">
          <h2>Consequências das mudanças climáticas</h2>
          <p>Veja as principais consequências das mudanças climáticas, incluindo eventos extremos e impactos na biodiversidade.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
