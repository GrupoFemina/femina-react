import React from 'react'
import Board from './components/Board'

export default function App() {
  return (
    <>
      <header>
        <h1>ATENDIMENTO PADRÃO</h1>
        <p>Organização e excelência no atendimento da rede Femina</p>
      </header>
      <Board />
      <footer>
        <img alt="Logo Femina" src="https://ibb.co/YBHMB5Ps" style={{ height: 80, objectFit: 'contain' }} />
        <p>© 2025 Grupo Femina | <a href="#">Política de Privacidade</a></p>
      </footer>
    </>
  )
}
