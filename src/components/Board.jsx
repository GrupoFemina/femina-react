import React, { useState } from 'react'
import data from '../data'

export default function Board() {
  const [modalContent, setModalContent] = useState(null)

  const openModal = content => setModalContent(content)
  const closeModal = () => setModalContent(null)

  const listsMap = {}
  Object.entries(data.lists).forEach(([id, name]) => {
    listsMap[id] = { name, cards: [] }
  })

  data.cards.forEach(card => {
    if (listsMap[card.idList]) listsMap[card.idList].cards.push(card)
  })

  const orderedListIds = [
    "estoque_coluna_001",
    "683615767be3d4dd7675250e",
    "683616ef6cc0c8d06e9b1dcc",
    "683615767be3d4dd7675250f",
    "683615767be3d4dd7675250d"
  ]

  return (
    <>
      <div className="board">
        {orderedListIds.map(id => {
          const list = listsMap[id]
          return (
            <div key={id} className="list">
              <h3>{list.name}</h3>
              {list.cards.map((card, idx) => (
                <button key={idx} className="card" onClick={() =>
                  openModal(<><strong>{card.name}</strong><br /><br /><span dangerouslySetInnerHTML={{ __html: card.desc }} /></>)}
                >
                  <strong>{card.name}</strong>
                </button>
              ))}
            </div>
          )
        })}
      </div>

      {modalContent && (
        <div id="modal" style={{ display: 'flex' }} onClick={closeModal}>
          <div onClick={e => e.stopPropagation()}>
            <button onClick={closeModal}>Fechar</button>
            <div id="modal-content">{modalContent}</div>
          </div>
        </div>
      )}
    </>
  )
}