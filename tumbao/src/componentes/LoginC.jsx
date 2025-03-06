import React from 'react';

const LoginC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#084c36]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-[#084c36] mb-6">Tumbao</h2>
        <p className="text-center text-[#00aac4] mb-6 italic">Baila - Disfruta - Vive</p>
        <form>
          <div className="mb-4">
            <label className="block text-[#116a1c] mb-2">Correo Electrónico</label>
            <input
              type="email"
              placeholder="Ingrese su correo"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#00aac4]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#116a1c] mb-2">Contraseña</label>
            <input
              type="password"
              placeholder="Ingrese su contraseña"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#00aac4]"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#084c36] text-white py-2 rounded-lg hover:bg-[#00aac4] transition-colors duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginC;