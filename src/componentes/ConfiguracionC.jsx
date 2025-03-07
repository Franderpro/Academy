import React, { useState } from 'react';
import { 
  FaUser, 
  FaBell, 
  FaLock, 
  FaPalette, 
  FaClock, 
  FaCreditCard, 
  FaShieldAlt, 
  FaLanguage,
  FaCheck,
  FaToggleOn,
  FaToggleOff,
  FaSave
} from 'react-icons/fa';

const ConfiguracionC = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [formData, setFormData] = useState({
    nombreAcademia: 'RhythmAcademy',
    email: 'admin@rhythmacademy.com',
    telefono: '+1 (555) 123-4567',
    direccion: 'Calle Principal 123, Ciudad',
    logotipo: null,
    colorPrimario: '#7C3AED',
    emailNotificaciones: true,
    pushNotificaciones: true,
    smsNotificaciones: false,
    recordatorioPagos: true,
    recordatorioClases: true,
    moneda: 'USD',
    impuestos: '8',
    diasAnticipacion: '3',
    idioma: 'es',
    temaOscuro: false,
    contrasenaActual: '',
    contrasenaNueva: '',
    contrasenaConfirmar: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la configuración
    alert('Configuración guardada correctamente');
  };

  const handleFileChange = (e) => {
    // Manejo de subida de archivos (logo)
    setFormData({
      ...formData,
      logotipo: e.target.files[0]
    });
  };

  // Componente de Toggle para switches
  const ToggleSwitch = ({ isOn, handleToggle, name }) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input 
            type="checkbox" 
            className="sr-only" 
            checked={isOn} 
            onChange={handleToggle}
            name={name} 
          />
          <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
          <div className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isOn ? 'transform translate-x-6 bg-brand-600' : ''}`}></div>
        </div>
      </label>
    );
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-800">Configuración del Sistema</h2>
        <button 
          onClick={handleSubmit}
          className="px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 flex items-center"
        >
          <FaSave className="mr-2" /> Guardar Cambios
        </button>
      </div>

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        {/* Menú lateral */}
        <div className="w-full md:w-64 bg-gray-50 p-4 md:p-0">
          <nav className="flex overflow-x-auto md:flex-col md:h-full py-2 md:py-6">
            <button 
              onClick={() => setActiveTab('perfil')}
              className={`flex items-center px-4 py-3 md:mx-0 mx-2 rounded-lg whitespace-nowrap md:whitespace-normal ${
                activeTab === 'perfil' 
                  ? 'bg-brand-100 text-brand-800 font-medium' 
                  : 'text-gray-600 hover:bg-brand-50'
              }`}
            >
              <FaUser className="w-5 h-5 mr-3" />
              <span>Perfil de Academia</span>
            </button>

            <button 
              onClick={() => setActiveTab('notificaciones')}
              className={`flex items-center px-4 py-3 md:mx-0 mx-2 rounded-lg whitespace-nowrap md:whitespace-normal ${
                activeTab === 'notificaciones' 
                  ? 'bg-brand-100 text-brand-800 font-medium' 
                  : 'text-gray-600 hover:bg-brand-50'
              }`}
            >
              <FaBell className="w-5 h-5 mr-3" />
              <span>Notificaciones</span>
            </button>

            <button 
              onClick={() => setActiveTab('apariencia')}
              className={`flex items-center px-4 py-3 md:mx-0 mx-2 rounded-lg whitespace-nowrap md:whitespace-normal ${
                activeTab === 'apariencia' 
                  ? 'bg-brand-100 text-brand-800 font-medium' 
                  : 'text-gray-600 hover:bg-brand-50'
              }`}
            >
              <FaPalette className="w-5 h-5 mr-3" />
              <span>Apariencia</span>
            </button>

            <button 
              onClick={() => setActiveTab('clases')}
              className={`flex items-center px-4 py-3 md:mx-0 mx-2 rounded-lg whitespace-nowrap md:whitespace-normal ${
                activeTab === 'clases' 
                  ? 'bg-brand-100 text-brand-800 font-medium' 
                  : 'text-gray-600 hover:bg-brand-50'
              }`}
            >
              <FaClock className="w-5 h-5 mr-3" />
              <span>Clases y Horarios</span>
            </button>

            <button 
              onClick={() => setActiveTab('pagos')}
              className={`flex items-center px-4 py-3 md:mx-0 mx-2 rounded-lg whitespace-nowrap md:whitespace-normal ${
                activeTab === 'pagos' 
                  ? 'bg-brand-100 text-brand-800 font-medium' 
                  : 'text-gray-600 hover:bg-brand-50'
              }`}
            >
              <FaCreditCard className="w-5 h-5 mr-3" />
              <span>Configuración de Pagos</span>
            </button>

            <button 
              onClick={() => setActiveTab('seguridad')}
              className={`flex items-center px-4 py-3 md:mx-0 mx-2 rounded-lg whitespace-nowrap md:whitespace-normal ${
                activeTab === 'seguridad' 
                  ? 'bg-brand-100 text-brand-800 font-medium' 
                  : 'text-gray-600 hover:bg-brand-50'
              }`}
            >
              <FaShieldAlt className="w-5 h-5 mr-3" />
              <span>Seguridad</span>
            </button>

            <button 
              onClick={() => setActiveTab('idioma')}
              className={`flex items-center px-4 py-3 md:mx-0 mx-2 rounded-lg whitespace-nowrap md:whitespace-normal ${
                activeTab === 'idioma' 
                  ? 'bg-brand-100 text-brand-800 font-medium' 
                  : 'text-gray-600 hover:bg-brand-50'
              }`}
            >
              <FaLanguage className="w-5 h-5 mr-3" />
              <span>Idioma y Región</span>
            </button>
          </nav>
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-6">
          {/* Perfil de Academia */}
          {activeTab === 'perfil' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Información de la Academia</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Academia</label>
                    <input 
                      type="text" 
                      name="nombreAcademia"
                      value={formData.nombreAcademia}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email de Contacto</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input 
                      type="tel" 
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                    <input 
                      type="text" 
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Logotipo</label>
                  <div className="flex items-center">
                    <div className="h-16 w-16 rounded-full bg-brand-100 flex items-center justify-center mr-4">
                      {formData.logotipo ? (
                        <img 
                          src={URL.createObjectURL(formData.logotipo)} 
                          alt="Logo preview" 
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        <span className="text-3xl">💃</span>
                      )}
                    </div>
                    <label className="cursor-pointer bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Cambiar Logo
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Notificaciones */}
          {activeTab === 'notificaciones' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de Notificaciones</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Notificaciones por email</h4>
                    <p className="text-sm text-gray-500">Recibir actualizaciones y alertas por correo electrónico</p>
                  </div>
                  <ToggleSwitch 
                    isOn={formData.emailNotificaciones} 
                    handleToggle={handleChange} 
                    name="emailNotificaciones"
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Notificaciones push</h4>
                    <p className="text-sm text-gray-500">Recibir notificaciones en tiempo real</p>
                  </div>
                  <ToggleSwitch 
                    isOn={formData.pushNotificaciones} 
                    handleToggle={handleChange} 
                    name="pushNotificaciones"
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Recordatorios de pagos</h4>
                    <p className="text-sm text-gray-500">Recordatorios de mensualidades y pagos pendientes</p>
                  </div>
                  <ToggleSwitch 
                    isOn={formData.recordatorioPagos} 
                    handleToggle={handleChange} 
                    name="recordatorioPagos"
                  />
                </div>

                <div className="flex items-center justify-between py-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Recordatorios de clases</h4>
                    <p className="text-sm text-gray-500">Recordatorios antes de clases programadas</p>
                  </div>
                  <ToggleSwitch 
                    isOn={formData.recordatorioClases} 
                    handleToggle={handleChange} 
                    name="recordatorioClases"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Apariencia */}
          {activeTab === 'apariencia' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Personalización de Apariencia</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Color Principal</label>
                  <div className="flex items-center">
                    <input 
                      type="color" 
                      name="colorPrimario"
                      value={formData.colorPrimario}
                      onChange={handleChange}
                      className="h-10 w-20 p-1 border rounded mr-3"
                    />
                    <span className="text-sm text-gray-500">{formData.colorPrimario}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Este color se usará en botones, encabezados y elementos destacados</p>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-t">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Modo Oscuro</h4>
                    <p className="text-sm text-gray-500">Activar interfaz con tema oscuro</p>
                  </div>
                  <ToggleSwitch 
                    isOn={formData.temaOscuro} 
                    handleToggle={handleChange} 
                    name="temaOscuro"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Previsualización</h4>
                  <div className={`p-4 rounded-lg border ${formData.temaOscuro ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                    <div className="flex items-center mb-3">
                      <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <h5 className={`font-medium ${formData.temaOscuro ? 'text-white' : 'text-gray-900'}`}>Nombre de Estudiante</h5>
                        <p className={`text-sm ${formData.temaOscuro ? 'text-gray-400' : 'text-gray-500'}`}>Salsa Intermedia</p>
                      </div>
                    </div>
                    <button 
                      style={{backgroundColor: formData.colorPrimario}}
                      className="px-4 py-2 text-white rounded-md w-full"
                    >
                      Ejemplo de Botón
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Clases y Horarios */}
          {activeTab === 'clases' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de Clases y Horarios</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Días de anticipación para recordatorios</label>
                  <input 
                    type="number" 
                    name="diasAnticipacion"
                    value={formData.diasAnticipacion}
                    onChange={handleChange}
                    min="0"
                    max="7"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Número de días antes para enviar recordatorios de clase</p>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Horario de funcionamiento</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hora de apertura</label>
                      <select className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                        <option value="08:00">08:00 AM</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hora de cierre</label>
                      <select className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                        <option value="18:00">06:00 PM</option>
                        <option value="19:00">07:00 PM</option>
                        <option value="20:00">08:00 PM</option>
                        <option value="21:00">09:00 PM</option>
                        <option value="22:00">10:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Duración predeterminada de clases</h4>
                  <select className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent">
                    <option value="30">30 minutos</option>
                    <option value="45">45 minutos</option>
                    <option value="60">60 minutos</option>
                    <option value="90">90 minutos</option>
                    <option value="120">120 minutos</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Configuración de Pagos */}
          {activeTab === 'pagos' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de Pagos</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Moneda</label>
                    <select 
                      name="moneda"
                      value={formData.moneda}
                      onChange={handleChange}
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    >
                      <option value="USD">USD - Dólar estadounidense</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - Libra esterlina</option>
                      <option value="MXN">MXN - Peso mexicano</option>
                      <option value="COP">COP - Peso colombiano</option>
                      <option value="ARS">ARS - Peso argentino</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Impuestos (%)</label>
                    <input 
                      type="number" 
                      name="impuestos"
                      value={formData.impuestos}
                      onChange={handleChange}
                      min="0"
                      max="30"
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Métodos de pago aceptados</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="efectivo" className="h-4 w-4 text-brand-600" checked />
                      <label htmlFor="efectivo" className="ml-2 text-gray-700">Efectivo</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="tarjeta" className="h-4 w-4 text-brand-600" checked />
                      <label htmlFor="tarjeta" className="ml-2 text-gray-700">Tarjeta de crédito/débito</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="transferencia" className="h-4 w-4 text-brand-600" checked />
                      <label htmlFor="transferencia" className="ml-2 text-gray-700">Transferencia bancaria</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="paypal" className="h-4 w-4 text-brand-600" />
                      <label htmlFor="paypal" className="ml-2 text-gray-700">PayPal</label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Políticas de pago</h4>
                  <textarea 
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent h-24"
                    placeholder="Describa las políticas de pago y reembolso de la academia..."
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* Seguridad */}
          {activeTab === 'seguridad' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de Seguridad</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Cambiar Contraseña</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña Actual</label>
                      <input 
                        type="password" 
                        name="contrasenaActual"
                        value={formData.contrasenaActual}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña</label>
                      <input 
                        type="password" 
                        name="contrasenaNueva"
                        value={formData.contrasenaNueva}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar Nueva Contraseña</label>
                      <input 
                        type="password" 
                        name="contrasenaConfirmar"
                        value={formData.contrasenaConfirmar}
                        onChange={handleChange}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                      />
                    </div>
                    <button className="mt-2 px-4 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700">
                      Actualizar Contraseña
                    </button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Verificación en dos pasos</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Añadir una capa extra de seguridad a tu cuenta</p>
                    </div>
                    <ToggleSwitch
                      isOn={false}
                      handleToggle={() => {}}
                      name="dosPasos"
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Sesiones activas</h4>
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Este dispositivo</p>
                        <p className="text-xs text-gray-500">Aplicación web • Chrome • México</p>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Activo ahora</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">iPhone 12</p>
                        <p className="text-xs text-gray-500">App iOS • Última actividad: hace 2 días</p>
                      </div>
                      <button className="text-sm text-red-600 hover:text-red-800">Cerrar sesión</button>
                    </div>
                  </div>
                  <button className="mt-3 text-sm text-red-600 hover:text-red-800 font-medium">
                    Cerrar todas las sesiones
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Idioma y Región */}
          {activeTab === 'idioma' && (
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">Configuración de Idioma y Región</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Idioma</label>
                  <select 
                    name="idioma"
                    value={formData.idioma}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="es">Español</option>
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                    <option value="fr">Français</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Formato de Fecha</label>
                  <select 
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="dd/mm/yyyy">DD/MM/AAAA (31/12/2023)</option>
                    <option value="mm/dd/yyyy">MM/DD/AAAA (12/31/2023)</option>
                    <option value="yyyy-mm-dd">AAAA-MM-DD (2023-12-31)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zona Horaria</label>
                  <select 
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                  >
                    <option value="america_mexico">América/Ciudad de México (UTC-6)</option>
                    <option value="america_bogota">América/Bogotá (UTC-5)</option>
                    <option value="america_argentina">América/Argentina (UTC-3)</option>
                    <option value="europe_madrid">Europa/Madrid (UTC+1)</option>
                    <option value="america_los_angeles">América/Los Ángeles (UTC-8)</option>
                    <option value="america_new_york">América/Nueva York (UTC-5)</option>
                  </select>
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Primeros días de la semana</h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="lunes" 
                        name="primerDia" 
                        value="lunes" 
                        className="h-4 w-4 text-brand-600"
                        checked 
                      />
                      <label htmlFor="lunes" className="ml-2 text-gray-700">Lunes</label>
                    </div>
                    <div className="flex items-center">
                      <input 
                        type="radio" 
                        id="domingo" 
                        name="primerDia" 
                        value="domingo" 
                        className="h-4 w-4 text-brand-600" 
                      />
                      <label htmlFor="domingo" className="ml-2 text-gray-700">Domingo</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button 
          onClick={handleSubmit}
          className="px-6 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 flex items-center shadow-md"
        >
          <FaCheck className="mr-2" /> Guardar todos los cambios
        </button>
      </div>
    </div>
  );
};

export default ConfiguracionC;
