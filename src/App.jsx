import React, { useState } from 'react';
import data from './data';
import './style.css';

function App() {
  const [setorAtivo, setSetorAtivo] = useState(null);
  const [modalCard, setModalCard] = useState(null);

  return (
    <div className="app-container">
      {/* CABEÇALHO */}
      <header className="main-header">
        <h1>ATENDIMENTO PADRÃO</h1>
        <p>Rede Femina - Organização e Excelência</p>
      </header>

      {/* CONTEÚDO PRINCIPAL (BOTÕES) */}
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

      {/* RODAPÉ DA TELA INICIAL - CENTRALIZADO NO FINAL */}
      <footer className="rodape-tela-inicial">
        <img 
          src="/logo-assinatura.png" 
          alt="Logo Grupo Femina" 
          className="img-assinatura-home" 
        />
        <p className="texto-assinatura-home">RÔ - ADM/VDF</p>
      </footer>

      {/* MODAL (CARDS) */}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
