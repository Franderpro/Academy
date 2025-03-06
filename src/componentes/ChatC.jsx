  import React, { useState } from 'react';

  const ChatC = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const people = [
      { id: 1, name: 'María', role: 'Profesora de Salsa', avatar: '👩‍🏫', 
        messages: ['Hola! ¿Listo para tu clase de salsa?', 'Empezaremos con pasos básicos', 'Recuerda: 1-2-3, pausa, 5-6-7, pausa'] },
      { id: 2, name: 'Carlos', role: 'Instructor de Bachata', avatar: '👨‍🏫',
        messages: ['¡Bienvenido a bachata!', 'Mantén tus movimientos suaves', 'Sigue el ritmo: un-dos-tres-tap'] },
      { id: 3, name: 'Ana', role: 'Maestra de Tango', avatar: '💃',
        messages: ['El tango es pasión', 'Mantén la postura erguida', '¿Practicamos el ocho básico?'] },
      { id: 4, name: 'Pedro', role: 'Profesor de Merengue', avatar: '🕺',
        messages: ['¡A bailar merengue!', 'Mueve las caderas', 'El merengue es uno-dos, uno-dos'] },
      { id: 5, name: 'Laura', role: 'Instructora de Kizomba', avatar: '👩‍🦱',
        messages: ['Bienvenido a Kizomba', 'Mantén la conexión con tu pareja', 'Siente la música y déjate llevar'] }
    ];

    return (
      <div className="flex flex-col md:flex-row h-screen bg-white text-black">
        <div className="w-full md:w-[300px] bg-gray-100 border-r border-gray-300 h-1/2 md:h-screen">
          <h2 className="text-xl font-bold p-4 text-black">Instructores de Baile</h2>
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            {people.map((person) => (
              <div
                key={person.id}
                className={`flex items-center p-3 cursor-pointer hover:bg-gray-200 ${selectedPerson?.id === person.id ? 'bg-gray-200' : ''}`}
                onClick={() => setSelectedPerson(person)}
              >
                <span className="text-2xl mr-2.5">{person.avatar}</span>
                <div>
                  <h3 className="text-base font-medium m-0 text-black">{person.name}</h3>
                  <p className="text-sm text-black m-0">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col h-1/2 md:h-screen">
          {selectedPerson ? (
            <>
              <div className="p-4 bg-gray-100 border-b border-gray-300 flex items-center">
                <span className="text-2xl mr-2.5">{selectedPerson.avatar}</span>
                <div>
                  <h3 className="text-base font-medium m-0 text-black">{selectedPerson.name}</h3>
                  <p className="text-sm text-black m-0">{selectedPerson.role}</p>
                </div>
              </div>
              <div className="flex-1 p-4 overflow-y-auto">
                {selectedPerson.messages.map((message, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <span className="text-2xl mr-2.5">{selectedPerson.avatar}</span>
                    <p className="bg-blue-50 p-2.5 px-4 rounded-2xl m-0 max-w-[70%] text-black">{message}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-black">
              <p>Selecciona un instructor para comenzar el chat</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default ChatC;