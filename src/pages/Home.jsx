import React, { useState } from "react";
import NavC from "../componentes/NavC";
import Sidebar from "../componentes/sidebar";
import ListaC from "../componentes/ListaC";
import ChatC from "../componentes/ChatC";
import PagosC from "../componentes/PagosC";
import ConfiguracionC from "../componentes/ConfiguracionC";

const Home = () => {
  // Estado para rastrear qué componente está activo
  const [activeComponent, setActiveComponent] = useState("bienvenida");

  // Función para renderizar el componente activo
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "lista":
        return <ListaC />;
      case "chat":
        return <ChatC />;
      case "pagos":
        return <PagosC />;
      case "configuracion":
        return <ConfiguracionC />;
      default:
        return (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-brand-50 to-pink-50 rounded-xl shadow-md">
            <div className="text-center p-8 max-w-2xl">
              <span className="text-6xl mb-6 block">💃🕺</span>
              <h2 className="text-3xl font-bold mb-4 text-brand-800">
                Bienvenido a Tumbao Academy
              </h2>
              <p className="text-gray-600 mb-8">
                Selecciona una opción del menú para administrar tu academia de
                baile.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setActiveComponent("lista")}
                  className="bg-brand-600 text-white py-3 px-6 rounded-lg hover:bg-brand-700 transition-colors shadow-md"
                >
                  Ver Estudiantes
                </button>
                <button
                  onClick={() => setActiveComponent("pagos")}
                  className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors shadow-md"
                >
                  Gestionar Pagos
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar fijo a la izquierda (desde arriba) */}
      <div className="fixed left-0 top-0 h-full w-64 z-20">
        <Sidebar
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
        />
      </div>

      {/* Área de contenido y nav (desplazada a la derecha) */}
      <div className="flex flex-col ml-64 w-full">
        {/* NavC fijo solo en el área a la derecha del sidebar */}
        <div className="sticky top-0 z-10 w-full">
          <NavC />
        </div>

        {/* Área de contenido principal */}
        <div className="flex-1 overflow-y-auto p-6 pt-4">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
};

export default Home;