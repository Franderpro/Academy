import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaPaperPlane, FaSmile, FaPaperclip, FaCircle, FaPhoneAlt, FaVideo, FaEllipsisV } from 'react-icons/fa';

const ChatC = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [activeConversations, setActiveConversations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  // Lista de personas con info más completa
  const people = [
    { 
      id: 1, 
      name: 'María Rodríguez', 
      role: 'Profesora de Salsa', 
      avatar: '👩‍🏫', 
      online: true,
      lastSeen: 'ahora',
      messages: [
        { id: 1, text: 'Hola! ¿Listo para tu clase de salsa?', time: '10:30 AM', sender: 'them' },
        { id: 2, text: 'Empezaremos con pasos básicos', time: '10:32 AM', sender: 'them' },
        { id: 3, text: 'Recuerda: 1-2-3, pausa, 5-6-7, pausa', time: '10:33 AM', sender: 'them' }
      ] 
    },
    { 
      id: 2, 
      name: 'Carlos Mendoza', 
      role: 'Instructor de Bachata', 
      avatar: '👨‍🏫', 
      online: true,
      lastSeen: 'ahora',
      messages: [
        { id: 1, text: '¡Bienvenido a bachata!', time: '2:20 PM', sender: 'them' },
        { id: 2, text: 'Mantén tus movimientos suaves', time: '2:22 PM', sender: 'them' },
        { id: 3, text: 'Sigue el ritmo: un-dos-tres-tap', time: '2:25 PM', sender: 'them' }
      ] 
    },
    { 
      id: 3, 
      name: 'Ana Gutiérrez', 
      role: 'Maestra de Tango', 
      avatar: '💃', 
      online: false,
      lastSeen: 'hace 35 min',
      messages: [
        { id: 1, text: 'El tango es pasión', time: '11:15 AM', sender: 'them' },
        { id: 2, text: 'Mantén la postura erguida', time: '11:17 AM', sender: 'them' },
        { id: 3, text: '¿Practicamos el ocho básico?', time: '11:20 AM', sender: 'them' }
      ] 
    },
    { 
      id: 4, 
      name: 'Pedro Vázquez', 
      role: 'Profesor de Merengue', 
      avatar: '🕺', 
      online: false,
      lastSeen: 'hace 1 h',
      messages: [
        { id: 1, text: '¡A bailar merengue!', time: '4:05 PM', sender: 'them' },
        { id: 2, text: 'Mueve las caderas', time: '4:08 PM', sender: 'them' },
        { id: 3, text: 'El merengue es uno-dos, uno-dos', time: '4:10 PM', sender: 'them' }
      ] 
    },
    { 
      id: 5, 
      name: 'Laura Herrera', 
      role: 'Instructora de Kizomba', 
      avatar: '👩‍🦱', 
      online: true,
      lastSeen: 'ahora',
      messages: [
        { id: 1, text: 'Bienvenido a Kizomba', time: '9:00 AM', sender: 'them' },
        { id: 2, text: 'Mantén la conexión con tu pareja', time: '9:02 AM', sender: 'them' },
        { id: 3, text: 'Siente la música y déjate llevar', time: '9:05 AM', sender: 'them' }
      ] 
    }
  ];
  
  // Filtrar contactos según búsqueda
  const filteredPeople = people.filter(person => 
    person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Enviar mensaje
  const sendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedPerson) return;
    
    // Crear nuevo mensaje
    const newMessage = {
      id: selectedPerson.messages.length + 1,
      text: messageInput,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      sender: 'me'
    };
    
    // Actualizar conversaciones
    // const updatedPeople = people.map(person => {
    //   if (person.id === selectedPerson.id) {
    //     return {
    //       ...person,
    //       messages: [...person.messages, newMessage]
    //     };
    //   }
    //   return person;
    // });
    
    // Actualizar estado
    setSelectedPerson({
      ...selectedPerson,
      messages: [...selectedPerson.messages, newMessage]
    });
    
    // Añadir a conversaciones activas si no existe
    if (!activeConversations.includes(selectedPerson.id)) {
      setActiveConversations([...activeConversations, selectedPerson.id]);
    }
    
    // Limpiar input
    setMessageInput('');
  };

  // Hacer scroll automático al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedPerson?.messages]);

  return (
    <div className="bg-gray-100 h-full rounded-lg overflow-hidden flex flex-col md:flex-row shadow-md">
      {/* Sidebar de contactos */}
      <div className="w-full md:w-80 bg-white h-full md:border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-brand-800 mb-4">Mensajes</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar contacto..."
              className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {filteredPeople.map((person) => (
            <div
              key={person.id}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedPerson?.id === person.id ? 'bg-brand-50 border-l-4 border-brand-500' : ''
              }`}
              onClick={() => setSelectedPerson(person)}
            >
              <div className="relative">
                <div className="text-2xl mr-3">{person.avatar}</div>
                {person.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-900 truncate">{person.name}</h3>
                  <span className="text-xs text-gray-500">
                    {person.messages[person.messages.length - 1]?.time}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500 truncate">{person.role}</p>
                  {person.online ? (
                    <span className="flex items-center text-xs text-green-500">
                      <FaCircle className="w-2 h-2 mr-1" /> En línea
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">{person.lastSeen}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Área principal de chat */}
      <div className="flex-1 flex flex-col h-full">
        {selectedPerson ? (
          <>
            {/* Encabezado de chat */}
            <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative">
                  <div className="text-2xl mr-3">{selectedPerson.avatar}</div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{selectedPerson.name}</h3>
                  <p className="text-xs text-gray-500">
                    {selectedPerson.online ? (
                      <span className="flex items-center text-green-500">
                        <FaCircle className="w-2 h-2 mr-1" /> En línea
                      </span>
                    ) : (
                      `Última vez: ${selectedPerson.lastSeen}`
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-gray-500 hover:text-brand-600 p-2 rounded-full hover:bg-gray-100">
                  <FaEllipsisV />
                </button>
              </div>
            </div>
            
            {/* Área de mensajes */}
            <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-brand-50 to-pink-50">
              {selectedPerson.messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex mb-4 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender !== 'me' && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="text-2xl">{selectedPerson.avatar}</div>
                    </div>
                  )}
                  <div 
                    className={`relative max-w-[70%] px-4 py-2 rounded-lg shadow-sm ${
                      message.sender === 'me' 
                        ? 'bg-brand-600 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 rounded-bl-none'
                    }`}
                  >
                    <p className="mb-1">{message.text}</p>
                    <p className={`text-xs ${message.sender === 'me' ? 'text-brand-100' : 'text-gray-500'} text-right`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Área de entrada de mensajes */}
            <div className="bg-white p-3 border-t border-gray-200">
              <form onSubmit={sendMessage} className="flex items-center">
                <button 
                  type="button" 
                  className="p-2 rounded-full text-gray-500 hover:text-brand-600 hover:bg-gray-100"
                >
                  <FaPaperclip />
                </button>
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  className="flex-1 py-2 px-4 mx-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-500"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                                <button 
                  type="button"
                  className="p-2 rounded-full text-gray-500 hover:text-brand-600 hover:bg-gray-100"
                >
                  <FaSmile />
                </button>
                <button 
                  type="submit"
                  className="p-2 rounded-full bg-brand-600 text-white hover:bg-brand-700"
                >
                  <FaPaperPlane />
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-brand-50 to-pink-50 p-6">
            <div className="text-6xl mb-6">💬</div>
            <h3 className="text-xl font-bold text-brand-800 mb-3">Tus conversaciones</h3>
            <p className="text-center text-gray-600 mb-6 max-w-md">
              Selecciona un contacto de la lista para ver los mensajes o iniciar una nueva conversación.
            </p>
            <button 
              onClick={() => setSelectedPerson(people[0])}
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-md"
            >
              Comenzar a chatear
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatC;

