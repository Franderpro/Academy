  import React from 'react';
  import { 
    FaUserGraduate, 
    FaComments, 
    FaCreditCard, 
    FaCalendarAlt, 
    FaChartLine, 
    FaCog,
    FaSignOutAlt
  } from 'react-icons/fa';

  function Sidebar({ setActiveComponent, activeComponent }) {
    // Función que maneja los clicks en las opciones del menú
    const handleNavigation = (component) => {
      setActiveComponent(component);
    };

    // Lista de elementos del menú con iconos
    const menuItems = [
      { id: 'lista', text: 'Estudiantes', icon: <FaUserGraduate /> },
      { id: 'chat', text: 'Mensajes', icon: <FaComments /> },
      { id: 'pagos', text: 'Pagos', icon: <FaCreditCard /> },
      { id: 'configuracion', text: 'Configuración', icon: <FaCog /> }
    ];

    return (
      <div className="bg-gradient-to-b from-brand-600 to-brand-dark h-screen w-64 fixed left-0 top-0 text-white p-4 shadow-lg overflow-y-auto">
        {/* Logo y título de la academia */}
        <div className="flex items-center justify-center mb-8 pt-4">
          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
            <span className="text-2xl text-brand-dark">💃</span>
          </div>
          <h1 className="text-xl font-bold ml-3 tracking-wide">Tumbao Academy</h1>
        </div>
    
        {/* Línea divisoria con degradado */}
        <div className="h-0.5 bg-gradient-to-r from-brand-500/20 via-white/60 to-brand-500/20 mb-6"></div>
    
        {/* Menú de navegación */}
        <nav className="flex flex-col space-y-2">
          {menuItems.map(item => (
            <button 
              key={item.id}
              onClick={() => handleNavigation(item.id)} 
              className={`
                flex items-center p-3 rounded-lg transition-all duration-200 
                ${activeComponent === item.id 
                  ? 'bg-white text-brand-dark shadow-md font-medium translate-x-1' 
                  : 'text-white hover:bg-brand-500/40 hover:translate-x-1'
                }
              `}
            >
              <span className="text-lg mr-3">{item.icon}</span>
              <span>{item.text}</span>
              {activeComponent === item.id && 
                <span className="ml-auto h-2 w-2 rounded-full bg-brand-500"></span>
              }
            </button>
          ))}
        </nav>
    
        {/* Información de perfil en parte inferior */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="h-0.5 bg-gradient-to-r from-brand-500/20 via-white/40 to-brand-500/20 mb-4"></div>
          <button className="w-full flex items-center p-2 rounded-lg hover:bg-brand-600/30 cursor-pointer transition-colors">
            <FaSignOutAlt className="text-lg mr-3" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    );
  }
  export default Sidebar;