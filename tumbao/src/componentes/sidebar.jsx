  import React, { useState } from 'react'
  import ListaC from './ListaC'
  import ChatC from './ChatC'


  function Sidebar() {
    const [showLista, setShowLista] = useState(false)
    const [showChat, setShowChat] = useState(false)

    return (
      <div className="bg-[#116a1c] h-screen w-64 fixed left-0 top-0 text-white p-4">
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold mb-6">Menu</h2>
      
          <a href="#" onClick={() => {setShowLista(!showLista); setShowChat(false)}} className="flex items-center p-3 bg-[#0D4715] hover:bg-[#90EE90] hover:text-[#084c36] rounded-lg transition-colors">
            <span>Lista de Estudiantes</span>
          </a>

          <a href="#" onClick={() => {setShowChat(!showChat); setShowLista(false)}} className="flex items-center p-3 bg-[#0D4715] hover:bg-[#90EE90] hover:text-[#084c36] rounded-lg transition-colors">
            <span>Mensajes</span>
          </a>

          <a href="#" className="flex items-center p-3 bg-[#0D4715] hover:bg-[#90EE90] hover:text-[#084c36] rounded-lg transition-colors">
            <span>Pagos</span>
          </a>
        </div>
        {showLista && <div className="fixed left-64 top-0 right-0"><ListaC /></div>}
        {showChat && <div className="fixed left-64 top-16 right-0 bottom-0 overflow-y-auto"><ChatC /></div>}
      </div>
    )
  }

  export default Sidebar