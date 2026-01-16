import React, { useState } from 'react';
import data from './data';
import './style.css';

function App() {
  const [setorAtivo, setSetorAtivo] = useState(null);
  const [modalCard, setModalCard] = useState(null);

  return (
    <div className="app-container">
      <header className="main-header">
        <h1>ATENDIMENTO PADRÃO</h1>
        <p>Rede Femina - Organização e Excelência</p>
      </header>

      <main className="setores-grid">
        {Object.entries(data.lists).map(([id, nome]) => (
          <div key={id} className="setor-item">
            <button 
              className="btn-setor-3d"
              onClick={() => setSetorAtivo(setorAtivo === id ? null : id)}
            >
              {nome}
            </button>
            
            {setorAtivo === id && (
              <div className="familia-opcoes">
                {data.cards.filter(c => c.idList === id).map((card, i) => (
                  <div key={i} className="sub-item" onClick={() => setModalCard(card)}>
                    {card.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </main>

      {modalCard && (
        <div className="modal-overlay" onClick={() => setModalCard(null)}>
          <div className="quadro-texto" onClick={e => e.stopPropagation()}>
            <div className="quadro-header">
              <h2>{modalCard.name}</h2>
              <button className="close-btn" onClick={() => setModalCard(null)}>&times;</button>
            </div>
            
            <div 
              className="quadro-corpo" 
              dangerouslySetInnerHTML={{ __html: modalCard.desc.replace(/\n/g, '<br>') }} 
            />

            <button className="btn-voltar" onClick={() => setModalCard(null)}>VOLTAR</button>

            {/* --- NOVO RODAPÉ COM LOGO E ASSINATURA --- */}
            <div className="rodape-assinatura-container">
              {/* O nome da imagem abaixo deve ser exatamente o que você subiu no GitHub */}
              <img src="/RO - ADM FEMINA.jpg" alt="Logo Grupo Femina" className="img-assinatura" />
              <p className="texto-assinatura">RÔ - ADM/VDF</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
