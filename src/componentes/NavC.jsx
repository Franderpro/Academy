  import React, { useState } from 'react';
  import { FaBell, FaSearch, FaQuestion, FaUserCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

  const NavC = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);

    return (
      <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">
        <div className="flex-1">
          <div className="relative max-w-md">
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FaBell className="text-gray-600 text-xl" />
            <span className="absolute top-1 right-1 bg-brand-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <FaQuestion className="text-gray-600 text-xl" />
          </button>
        
          {/* Perfil de usuario */}
          <div className="relative">
            <div 
              className="h-10 w-10 rounded-full bg-gradient-to-r from-brand-500 to-pink-500 flex items-center justify-center text-white font-medium cursor-pointer"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              AD
            </div>
          
            {/* Menú desplegable */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-20">
                <div className="px-4 py-3 border-b">
                  <p className="text-sm font-medium text-gray-900">Admin</p>
                  <p className="text-xs text-gray-500">admin@tumbao.com</p>
                </div>
                <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 flex items-center">
                  <FaUserCircle className="mr-2 text-brand-500" /> Ver perfil
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 flex items-center">
                  <FaCog className="mr-2 text-brand-500" /> Configuración
                </a>
                <div className="border-t my-1"></div>
                <a href="#" className="px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 flex items-center">
                  <FaSignOutAlt className="mr-2 text-brand-500" /> Cerrar sesión
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  };

  export default NavC;