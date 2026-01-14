import React, { useState } from 'react';
import data from './data'; // Certifique-se que o data.js está na mesma pasta
import './App.css';

const App = () => {
  const [setorAberto, setSetorAberto] = useState(null);
  const [cardAtivo, setCardAtivo] = useState(null);

  const toggleSetor = (id) => {
    setSetorAberto(setorAberto === id ? null : id);
  };

  return (
    <div className="container-geral">
      <header className="header-atendimento">
        <h1>ATENDIMENTO PADRÃO</h1>
        <p>Organização e excelência no atendimento da rede Femina</p>
      </header>

      <div className="container-setores">
        {Object.entries(data.lists).map(([id, nome]) => (
          <div key={id} className="wrapper-setor">
            {/* Botão Principal 3D */}
            <button 
              className={`btn-setor-3d ${setorAberto === id ? 'ativo' : ''}`}
              onClick={() => toggleSetor(id)}
            >
              {nome}
            </button>

            {/* Lista de Opções (Família) */}
            {setorAberto === id && (
              <div className="lista-opcoes-aberta">
                {data.cards
                  .filter(card => card.idList === id)
                  .map((card, index) => (
                    <div 
                      key={index} 
                      className="item-clicavel"
                      onClick={() => setCardAtivo(card)}
                    >
                      {card.name}
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* O Novo Quadro de Texto (Modal) conforme o croqui */}
      {cardAtivo && (
        <>
          <div className="modal-overlay" onClick={() => setCardAtivo(null)} />
          <div className="quadro-exibicao">
            <div className="quadro-header">
              <h3>{cardAtivo.name}</h3>
              <button className="btn-fechar-topo" onClick={() => setCardAtivo(null)}>&times;</button>
            </div>
            <div 
              className="quadro-conteudo"
              dangerouslySetInnerHTML={{ __html: cardAtivo.desc.replace(/\n/g, '<br>') }}
            />
            <button className="btn-voltar" onClick={() => setCardAtivo(null)}>VOLTAR</button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
