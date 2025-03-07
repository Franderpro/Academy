import React, { useState } from 'react';
import { FaSearch, FaFilePdf, FaFileExcel, FaFilter, FaPlus, FaHistory, FaCalendarAlt, FaChartBar, FaUserGraduate } from 'react-icons/fa';

const PagosC = () => {
  const [activeTab, setActiveTab] = useState('pendientes');
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Datos de muestra para pagos
  const pagos = [
    { id: 1, estudiante: "María Fernanda López", monto: 75, fecha: "2023-07-15", estado: "pagado", curso: "Salsa Avanzada" },
    { id: 2, estudiante: "Carlos Eduardo Martínez", monto: 60, fecha: "2023-07-22", estado: "pendiente", curso: "Bachata Intermedia" },
    { id: 3, estudiante: "Ana Patricia Ramírez", monto: 85, fecha: "2023-08-01", estado: "pagado", curso: "Tango" },
    { id: 4, estudiante: "Luis Miguel Sánchez", monto: 70, fecha: "2023-08-05", estado: "pagado", curso: "Salsa Básica" },
    { id: 5, estudiante: "Sofia Isabel Díaz", monto: 90, fecha: "2023-08-10", estado: "pendiente", curso: "Kizomba" },
    { id: 6, estudiante: "Roberto Antonio Cruz", monto: 65, fecha: "2023-08-15", estado: "vencido", curso: "Merengue" },
    { id: 7, estudiante: "Patricia Elena Torres", monto: 75, fecha: "2023-08-20", estado: "pagado", curso: "Bachata Básica" },
    { id: 8, estudiante: "Diego Alejandro Ruiz", monto: 80, fecha: "2023-08-25", estado: "vencido", curso: "Salsa Cubana" },
  ];

  // Estudiantes con mensualidades
  const estudiantes = [
    { id: 1, nombre: "María Fernanda López", curso: "Salsa Avanzada", mensualidad: 75, ultimoPago: "2023-07-15", estado: "al día" },
    { id: 2, nombre: "Carlos Eduardo Martínez", curso: "Bachata Intermedia", mensualidad: 60, ultimoPago: "2023-06-22", estado: "pendiente" },
    { id: 3, nombre: "Ana Patricia Ramírez", curso: "Tango", mensualidad: 85, ultimoPago: "2023-08-01", estado: "al día" },
    { id: 4, nombre: "Luis Miguel Sánchez", curso: "Salsa Básica", mensualidad: 70, ultimoPago: "2023-08-05", estado: "al día" },
    { id: 5, nombre: "Sofia Isabel Díaz", curso: "Kizomba", mensualidad: 90, ultimoPago: "2023-07-10", estado: "pendiente" },
    { id: 6, nombre: "Roberto Antonio Cruz", curso: "Merengue", mensualidad: 65, ultimoPago: "2023-06-15", estado: "atrasado" },
    { id: 7, nombre: "Patricia Elena Torres", curso: "Bachata Básica", mensualidad: 75, ultimoPago: "2023-08-20", estado: "al día" },
    { id: 8, nombre: "Diego Alejandro Ruiz", curso: "Salsa Cubana", mensualidad: 80, ultimoPago: "2023-06-25", estado: "atrasado" },
  ];

  // Estadísticas de pagos
  const estadisticas = {
    totalRecaudado: 1060,
    pendienteCobro: 215,
    pagosMes: 18,
    estudiantesActivos: 26,
    porcentajePagados: 78,
  };

  // Filtrar estudiantes según la pestaña activa
  const estudiantesFiltrados = estudiantes.filter(estudiante => {
    if (activeTab === 'pendientes') return estudiante.estado !== 'al día';
    if (activeTab === 'aldia') return estudiante.estado === 'al día';
    return true; // todos
  });

  // Registrar un nuevo pago
  const registrarPago = (estudiante) => {
    setSelectedStudent(estudiante);
    setShowModal(true);
  };

  // Modal de registro de pago
  const ModalPago = () => {
    const [monto, setMonto] = useState(selectedStudent?.mensualidad || '');
    const [fecha, setFecha] = useState(new Date().toISOString().split('T')[0]);
    const [metodo, setMetodo] = useState('efectivo');
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí iría la lógica para guardar el pago
      setShowModal(false);
      alert(`Pago registrado para ${selectedStudent.nombre}`);
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-brand-800">Registrar Pago</h2>
          <p className="mb-4 text-gray-600">Estudiante: <span className="font-semibold">{selectedStudent?.nombre}</span></p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Monto</label>
              <input 
                type="number"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={monto}
                onChange={(e) => setMonto(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Fecha</label>
              <input 
                type="date"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Método de Pago</label>
              <select 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={metodo}
                onChange={(e) => setMetodo(e.target.value)}
              >
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta de Crédito/Débito</option>
                <option value="transferencia">Transferencia Bancaria</option>
                <option value="movil">Pago Móvil</option>
              </select>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button 
                type="button" 
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-gray-700"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 bg-brand-600 text-white rounded hover:bg-brand-700"
              >
                Registrar Pago
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-800">Sistema de Pagos</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 flex items-center">
            <FaFileExcel className="mr-2" /> Exportar
          </button>
          <button className="px-3 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 flex items-center">
            <FaFilePdf className="mr-2" /> Generar Informes
          </button>
        </div>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="rounded-full bg-brand-100 p-3 mr-4">
              <FaChartBar className="text-brand-600 text-lg" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Recaudado</p>
              <p className="text-xl font-bold text-brand-800">${estadisticas.totalRecaudado}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="rounded-full bg-red-100 p-3 mr-4">
              <FaCalendarAlt className="text-red-600 text-lg" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pendiente Cobro</p>
              <p className="text-xl font-bold text-red-600">${estadisticas.pendienteCobro}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="rounded-full bg-green-100 p-3 mr-4">
              <FaHistory className="text-green-600 text-lg" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pagos del Mes</p>
              <p className="text-xl font-bold text-green-600">{estadisticas.pagosMes}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3 mr-4">
              <FaUserGraduate className="text-blue-600 text-lg" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Estudiantes</p>
              <p className="text-xl font-bold text-blue-600">{estadisticas.estudiantesActivos}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="rounded-full bg-brand-100 p-3 mr-4">
                <FaChartBar className="text-brand-600 text-lg" />
              </div>
              <div>
                <p className="text-sm text-gray-600">% Pagados</p>
                <p className="text-xl font-bold text-brand-800">{estadisticas.porcentajePagados}%</p>
              </div>
            </div>
            <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
              <div 
                className="h-8 w-8 rounded-full border-2 border-brand-500"
                style={{
                  background: `conic-gradient(#8B5CF6 ${estadisticas.porcentajePagados * 3.6}deg, #EDE9FE 0deg)`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Pestañas de pagos */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
        <div className="flex border-b">
          <button 
            className={`px-4 py-3 font-medium ${activeTab === 'todos' ? 'text-brand-700 border-b-2 border-brand-500' : 'text-gray-600 hover:text-brand-500'}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos los Estudiantes
          </button>
          <button 
            className={`px-4 py-3 font-medium ${activeTab === 'pendientes' ? 'text-brand-700 border-b-2 border-brand-500' : 'text-gray-600 hover:text-brand-500'}`}
            onClick={() => setActiveTab('pendientes')}
          >
            Pagos Pendientes
          </button>
          <button 
            className={`px-4 py-3 font-medium ${activeTab === 'aldia' ? 'text-brand-700 border-b-2 border-brand-500' : 'text-gray-600 hover:text-brand-500'}`}
            onClick={() => setActiveTab('aldia')}
          >
            Al Día
          </button>
        </div>

        {/* Barra de búsqueda y filtros */}
        <div className="flex items-center p-4 border-b">
          <div className="relative flex-1 mr-4">
            <input 
              type="text" 
              placeholder="Buscar estudiante..." 
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">
            <FaFilter className="mr-2" /> Filtros
          </button>
          <button 
            className="ml-3 px-3 py-2 bg-brand-600 text-white rounded-md hover:bg-brand-700 flex items-center"
            onClick={() => setShowModal(true)}
          >
            <FaPlus className="mr-2" /> Nuevo Pago
          </button>
        </div>

        {/* Tabla de estudiantes con estado de pagos */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mensualidad</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Último Pago</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {estudiantesFiltrados.map((estudiante) => (
                <tr key={estudiante.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">{estudiante.nombre}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{estudiante.curso}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${estudiante.mensualidad}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{estudiante.ultimoPago}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${estudiante.estado === 'al día' ? 'bg-green-100 text-green-800' : 
                        estudiante.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {estudiante.estado}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => registrarPago(estudiante)} 
                      className="text-brand-600 hover:text-brand-900"
                    >
                      Registrar pago
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Historial de pagos recientes */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-3 border-b">
          <h3 className="text-lg font-medium text-gray-900">Historial de Pagos Recientes</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Curso</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pagos.map((pago) => (
                <tr key={pago.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.estudiante}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.curso}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${pago.monto}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.fecha}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${pago.estado === 'pagado' ? 'bg-green-100 text-green-800' : 
                        pago.estado === 'pendiente' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {pago.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para registro de pago */}
      {showModal && <ModalPago />}
    </div>
  )
}

export default PagosC