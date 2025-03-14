import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import supabase from '../supabase/supabase';

const LoginC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        alert('Error al iniciar sesión: ' + error.message);
        return;
      }

      if (data.user) {
        alert('¡Inicio de sesión exitoso!');
        window.location.href = '/home';
      }
    } catch (error) {
      alert('Error inesperado: ' + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-brand-800 to-brand-900">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light opacity-5 rounded-l-full"></div>
      
      <div className="relative w-full max-w-md px-6 py-12 bg-white rounded-2xl shadow-2xl m-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-2">Tumbao Academy</h2>
          <p className="text-brand-600 text-lg italic">Baila - Disfruta - Vive</p>
          <div className="h-1 w-16 bg-gradient-to-r from-brand-300 to-brand-600 mx-auto my-4 rounded-full"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-medium text-brand-700 block mb-2">Correo Electrónico</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-brand-500" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingrese su correo"
                required
                className="w-full pl-10 pr-4 py-3 border-2 border-brand-100 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-300"
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-brand-700">Contraseña</label>
              <a href="#" className="text-xs text-brand-600 hover:text-brand-700 transition-colors">¿Olvidó su contraseña?</a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-brand-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
                className="w-full pl-10 pr-12 py-3 border-2 border-brand-100 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-300"
              />
              <button 
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-500 hover:text-brand-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-brand-500 border-brand-300 rounded focus:ring-brand-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-700">
              Recordarme
            </label>
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-brand-600 to-brand-700 text-white rounded-xl hover:from-brand-700 hover:to-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-brand-700">
            ¿No tiene una cuenta? <a href="#" className="font-medium text-brand-600 hover:text-brand-700 transition-colors">Regístrese</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginC;