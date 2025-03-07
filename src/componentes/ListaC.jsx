import React, { useState, useEffect } from 'react';
import { 
  FaUserPlus, 
  FaSearch, 
  FaFilter, 
  FaSort, 
  FaSortUp, 
  FaSortDown, 
  FaEllipsisV,
  FaFileExport,
  FaTrash,
  FaEdit,
  FaEnvelope,
  FaCheck,
  FaTimes
} from 'react-icons/fa';

const ListaC = () => {
  // Estado para estudiantes y funcionalidades
  const [estudiantes, setEstudiantes] = useState([
    {
      id: 1,
      nombreCompleto: "Juan Carlos Pérez Rodríguez",
      fechaPago: "2023-03-15",
      pagado: true,
      email: "juan.perez@example.com",
      telefono: "+1 234-567-8901",
      curso: "Salsa Intermedia"
    },
    {
      id: 2,
      nombreCompleto: "María Fernanda López García",
      fechaPago: "2023-07-22",
      pagado: false,
      email: "maria.lopez@example.com",
      telefono: "+1 234-567-8902",
      curso: "Bachata Básica"
    },
    {
      id: 3,
      nombreCompleto: "Carlos Eduardo Martínez Silva",
      fechaPago: "2023-11-30",
      pagado: true,
      email: "carlos.martinez@example.com",
      telefono: "+1 234-567-8903",
      curso: "Tango Avanzado"
    },
    {
      id: 4,
      nombreCompleto: "Ana Patricia Ramírez Torres",
      fechaPago: "2023-05-18",
      pagado: false,
      email: "ana.ramirez@example.com",
      telefono: "+1 234-567-8904",
      curso: "Kizomba Básica"
    },
    {
      id: 5,
      nombreCompleto: "Luis Miguel Sánchez Morales",
      fechaPago: "2023-01-25",
      pagado: true,
      email: "luis.sanchez@example.com",
      telefono: "+1 234-567-8905",
      curso: "Salsa Avanzada"
    },
    {
      id: 6,
      nombreCompleto: "Sofia Isabel Díaz Mendoza",
      fechaPago: "2023-09-12",
      pagado: true,
      email: "sofia.diaz@example.com",
      telefono: "+1 234-567-8906",
      curso: "Bachata Intermedia"
    },
    {
      id: 7,
      nombreCompleto: "Roberto Antonio Cruz Vega",
      fechaPago: "2023-04-30",
      pagado: false,
      email: "roberto.cruz@example.com",
      telefono: "+1 234-567-8907",
      curso: "Merengue Básico"
    },
    {
      id: 8,
      nombreCompleto: "Patricia Elena Torres Luna",
      fechaPago: "2023-12-05",
      pagado: true,
      email: "patricia.torres@example.com",
      telefono: "+1 234-567-8908",
      curso: "Tango Básico"
    },
    {
      id: 9,
      nombreCompleto: "Diego Alejandro Ruiz Flores",
      fechaPago: "2023-08-17",
      pagado: false,
      email: "diego.ruiz@example.com",
      telefono: "+1 234-567-8909",
      curso: "Salsa Básica"
    },
    {
      id: 10,
      nombreCompleto: "Carmen Rosa Medina Paz",
      fechaPago: "2023-02-28",
      pagado: true,
      email: "carmen.medina@example.com",
      telefono: "+1 234-567-8910",
      curso: "Kizomba Intermedia"
    },
    {
      id: 11,
      nombreCompleto: "Fernando José Castro Lima",
      fechaPago: "2023-06-14",
      pagado: true,
      email: "fernando.castro@example.com",
      telefono: "+1 234-567-8911",
      curso: "Bachata Avanzada"
    },
    {
      id: 12,
      nombreCompleto: "Valentina Andrea Ortiz Soto",
      fechaPago: "2023-11-09",
      pagado: false,
      email: "valentina.ortiz@example.com",
      telefono: "+1 234-567-8912",
      curso: "Salsa Intermedia"
    }
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [filtroPago, setFiltroPago] = useState("todos");
  const [ordenColumna, setOrdenColumna] = useState("id");
  const [ordenDireccion, setOrdenDireccion] = useState("asc");
  const [paginaActual, setPaginaActual] = useState(1);
  const [porPagina, setPorPagina] = useState(8);
  const [mostrarDetalles, setMostrarDetalles] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState(null);
  const [estudiantesSeleccionados, setEstudiantesSeleccionados] = useState([]);
  const [nuevoEstudiante, setNuevoEstudiante] = useState({
    nombreCompleto: "",
    email: "",
    telefono: "",
    curso: "",
    fechaPago: new Date().toISOString().slice(0, 10),
    pagado: false
  });

  // Función para manejar ordenamiento
  const handleSort = (columna) => {
    if (ordenColumna === columna) {
      setOrdenDireccion(ordenDireccion === "asc" ? "desc" : "asc");
    } else {
      setOrdenColumna(columna);
      setOrdenDireccion("asc");
    }
  };

  // Función para obtener el ícono de ordenamiento
  const getSortIcon = (columna) => {
    if (ordenColumna !== columna) {
      return <FaSort className="ml-1 text-gray-400" />;
    }
    return ordenDireccion === "asc" ? <FaSortUp className="ml-1 text-brand-600" /> : <FaSortDown className="ml-1 text-brand-600" />;
  };

  // Función para filtrar estudiantes
  const filtrarEstudiantes = () => {
    return [...estudiantes]
      .filter(estudiante =>
        estudiante.nombreCompleto.toLowerCase().includes(busqueda.toLowerCase()) ||
        estudiante.email.toLowerCase().includes(busqueda.toLowerCase()) ||
        estudiante.curso.toLowerCase().includes(busqueda.toLowerCase())
      )
      .filter(estudiante => {
        if (filtroPago === "pagado") return estudiante.pagado;
        if (filtroPago === "pendiente") return !estudiante.pagado;
        return true;
      })
      .sort((a, b) => {
        const valorA = a[ordenColumna];
        const valorB = b[ordenColumna];

        if (typeof valorA === 'string') {
          return ordenDireccion === "asc" 
            ? valorA.localeCompare(valorB) 
            : valorB.localeCompare(valorA);
        } else {
          return ordenDireccion === "asc" 
            ? valorA - valorB 
            : valorB - valorA;
        }
      });
  };

  // Estudiantes filtrados y ordenados
  const estudiantesFiltrados = filtrarEstudiantes();

  // Paginación
  const indiceUltimoEstudiante = paginaActual * porPagina;
  const indicePrimerEstudiante = indiceUltimoEstudiante - porPagina;
  const estudiantesActuales = estudiantesFiltrados.slice(indicePrimerEstudiante, indiceUltimoEstudiante);
  const totalPaginas = Math.ceil(estudiantesFiltrados.length / porPagina);

  // Cambiar página
  const cambiarPagina = (numeroPagina) => {
    if (numeroPagina > 0 && numeroPagina <= totalPaginas) {
      setPaginaActual(numeroPagina);
    }
  };

  // Manejar selección de estudiante
  const toggleSeleccionEstudiante = (id) => {
    if (estudiantesSeleccionados.includes(id)) {
      setEstudiantesSeleccionados(estudiantesSeleccionados.filter(estudianteId => estudianteId !== id));
    } else {
      setEstudiantesSeleccionados([...estudiantesSeleccionados, id]);
    }
  };

  // Seleccionar todos los estudiantes
  const toggleSeleccionarTodos = () => {
    if (estudiantesSeleccionados.length === estudiantesActuales.length) {
      setEstudiantesSeleccionados([]);
    } else {
      setEstudiantesSeleccionados(estudiantesActuales.map(e => e.id));
    }
  };

  // Formatear fecha para mostrar
  const formatearFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Agregar nuevo estudiante
  const handleAddEstudiante = () => {
    if (nuevoEstudiante.nombreCompleto && nuevoEstudiante.email) {
      const nuevoId = Math.max(...estudiantes.map(e => e.id)) + 1;
      setEstudiantes([
        ...estudiantes,
        {
          ...nuevoEstudiante,
          id: nuevoId
        }
      ]);
      setShowModal(false);
      setNuevoEstudiante({
        nombreCompleto: "",
        email: "",
        telefono: "",
        curso: "",
        fechaPago: new Date().toISOString().slice(0, 10),
        pagado: false
      });
    }
  };

  // Editar estudiante
  const handleEditEstudiante = () => {
    if (estudianteSeleccionado) {
      setEstudiantes(
        estudiantes.map(e => 
          e.id === estudianteSeleccionado.id ? estudianteSeleccionado : e
        )
      );
      setShowModal(false);
      setEstudianteSeleccionado(null);
    }
  };

  // Eliminar estudiante
  const handleDeleteEstudiante = () => {
    setEstudiantes(estudiantes.filter(e => e.id !== estudianteSeleccionado.id));
    setShowDeleteModal(false);
    setEstudianteSeleccionado(null);
  };

  // Manejar cambios en el form
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    if (estudianteSeleccionado) {
      setEstudianteSeleccionado({
        ...estudianteSeleccionado,
        [name]: newValue
      });
    } else {
      setNuevoEstudiante({
        ...nuevoEstudiante,
        [name]: newValue
      });
    }
  };

  // Verificar si todos los estudiantes están seleccionados
  const todosSeleccionados = estudiantesActuales.length > 0 && 
    estudiantesActuales.every(e => estudiantesSeleccionados.includes(e.id));

  // Componente de Modal para Agregar/Editar Estudiante
  const EstudianteModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-brand-800">
          {estudianteSeleccionado ? 'Editar Estudiante' : 'Agregar Nuevo Estudiante'}
        </h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
            <input 
              type="text"
              name="nombreCompleto"
              value={estudianteSeleccionado ? estudianteSeleccionado.nombreCompleto : nuevoEstudiante.nombreCompleto}
              onChange={handleFormChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
            <input 
              type="tel"
              name="telefono"
              value={estudianteSeleccionado ? estudianteSeleccionado.telefono : nuevoEstudiante.telefono}
              onChange={handleFormChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Curso</label>
            <select 
              name="curso"
              value={estudianteSeleccionado ? estudianteSeleccionado.curso : nuevoEstudiante.curso}
              onChange={handleFormChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              required
            >
              <option value="">Seleccionar curso</option>
              <option value="Salsa Básica">Salsa Básica</option>
              <option value="Salsa Intermedia">Salsa Intermedia</option>
              <option value="Salsa Avanzada">Salsa Avanzada</option>
              <option value="Bachata Básica">Bachata Básica</option>
              <option value="Bachata Intermedia">Bachata Intermedia</option>
              <option value="Bachata Avanzada">Bachata Avanzada</option>
              <option value="Tango Básico">Tango Básico</option>
              <option value="Tango Avanzado">Tango Avanzado</option>
              <option value="Kizomba Básica">Kizomba Básica</option>
              <option value="Kizomba Intermedia">Kizomba Intermedia</option>
              <option value="Merengue Básico">Merengue Básico</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de Pago</label>
            <input 
              type="date"
              name="fechaPago"
              value={estudianteSeleccionado ? estudianteSeleccionado.fechaPago : nuevoEstudiante.fechaPago}
              onChange={handleFormChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="pagado"
              name="pagado"
              className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
              checked={estudianteSeleccionado ? estudianteSeleccionado.pagado : nuevoEstudiante.pagado}
              onChange={handleFormChange}
            />
            <label htmlFor="pagado" className="ml-2 block text-sm text-gray-700">
              Pago realizado
            </label>
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button 
            type="button" 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            onClick={() => {
              setShowModal(false)
              setEstudianteSeleccionado(null)
            }}
          >
            Cancelar
          </button>
          <button 
            type="button" 
            className="px-4 py-2 bg-brand-600 text-white rounded hover:bg-brand-700"
            onClick={estudianteSeleccionado ? handleEditEstudiante : handleAddEstudiante}
          >
            {estudianteSeleccionado ? 'Guardar Cambios' : 'Agregar Estudiante'}
          </button>
        </div>
      </div>
    </div>
  )

  // Modal de confirmación para eliminar estudiante
  const DeleteConfirmationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Confirmar Eliminación</h2>
        <p className="mb-6 text-gray-600">
          ¿Estás seguro de que deseas eliminar a <span className="font-semibold">{estudianteSeleccionado?.nombreCompleto}</span>? 
          Esta acción no se puede deshacer.
        </p>
        
        <div className="flex justify-end space-x-3">
          <button 
            type="button" 
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            onClick={() => {
              setShowDeleteModal(false)
              setEstudianteSeleccionado(null)
            }}
          >
            Cancelar
          </button>
          <button 
            type="button" 
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={handleDeleteEstudiante}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )

  // Componente para vista detallada de estudiante
  const DetalleEstudiante = ({ estudiante, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-brand-800">Detalles del Estudiante</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center mb-4">
            <div className="h-20 w-20 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-2xl">
              {estudiante.nombreCompleto.split(' ').map(name => name[0]).join('').substring(0, 2).toUpperCase()}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Nombre completo</p>
              <p className="font-medium">{estudiante.nombreCompleto}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Curso</p>
              <p className="font-medium">{estudiante.curso}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{estudiante.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Teléfono</p>
              <p className="font-medium">{estudiante.telefono}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Fecha de Pago</p>
              <p className="font-medium">{formatearFecha(estudiante.fechaPago)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Estado de Pago</p>
              <span className={`px-2 py-1 rounded-full text-sm ${estudiante.pagado ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {estudiante.pagado ? 'Pagado' : 'Pendiente'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 mt-6">
          <button 
            onClick={() => {
              setEstudianteSeleccionado(estudiante)
              setShowModal(true)
              onClose()
            }}
            className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 flex items-center"
          >
            <FaEdit className="mr-1" /> Editar
          </button>
          <button 
            onClick={() => {
              setEstudianteSeleccionado(estudiante)
              setShowDeleteModal(true)
              onClose()
            }}
            className="px-3 py-1.5 bg-red-600 text-white rounded text-sm hover:bg-red-700 flex items-center"
          >
            <FaTrash className="mr-1" /> Eliminar
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-6">
      {/* Modales */}
      {showModal && <EstudianteModal />}
      {showDeleteModal && <DeleteConfirmationModal />}
      {mostrarDetalles && <DetalleEstudiante estudiante={mostrarDetalles} onClose={() => setMostrarDetalles(null)} />}
      
      {/* Encabezado y barra de herramientas */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-brand-800 mb-4">Lista de Estudiantes</h2>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-4 rounded-lg shadow-sm">
          {/* Búsqueda */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Buscar estudiante..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          {/* Filtros */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 hidden md:inline">Filtrar por:</span>
            <select
              className="p-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent text-gray-700"
              value={filtroPago}
              onChange={(e) => setFiltroPago(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="pagado">Pagados</option>
              <option value="pendiente">Pendientes</option>
            </select>
            
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <FaFilter />
            </button>
          </div>
          
          {/* Botones de acción */}
          <div className="flex items-center space-x-2">
            <button
              className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 flex items-center"
              onClick={() => setShowModal(true)}
            >
              <FaUserPlus className="mr-2" /> Nuevo Estudiante
            </button>
            
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <FaFileExport />
            </button>
          </div>
        </div>
      </div>
      
      {/* Tabla de estudiantes */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <th className="px-6 py-3">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                      checked={todosSeleccionados}
                      onChange={toggleSeleccionarTodos}
                    />
                  </div>
                </th>
                <th 
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center">
                    ID {getSortIcon('id')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort('nombreCompleto')}
                >
                  <div className="flex items-center">
                    Estudiante {getSortIcon('nombreCompleto')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort('curso')}
                >
                  <div className="flex items-center">
                    Curso {getSortIcon('curso')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort('fechaPago')}
                >
                  <div className="flex items-center">
                    Fecha de Pago {getSortIcon('fechaPago')}
                  </div>
                </th>
                <th 
                  className="px-6 py-3 cursor-pointer"
                  onClick={() => handleSort('pagado')}
                >
                                    <div className="flex items-center">
                    Estado de Pago {getSortIcon('pagado')}
                  </div>
                </th>
                <th className="px-6 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {estudiantesActuales.map((estudiante) => (
                <tr 
                  key={estudiante.id} 
                  className={`hover:bg-gray-50 ${estudiantesSeleccionados.includes(estudiante.id) ? 'bg-brand-50' : ''}`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 text-brand-600 focus:ring-brand-500 border-gray-300 rounded"
                      checked={estudiantesSeleccionados.includes(estudiante.id)}
                      onChange={() => toggleSeleccionEstudiante(estudiante.id)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {estudiante.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold">
                        {estudiante.nombreCompleto.split(' ').map(name => name[0]).join('').substring(0, 2)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{estudiante.nombreCompleto}</div>
                        <div className="text-sm text-gray-500">{estudiante.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{estudiante.curso}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{formatearFecha(estudiante.fechaPago)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      estudiante.pagado 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {estudiante.pagado ? 'Pagado' : 'Pendiente'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex space-x-2 justify-end">
                      <button 
                        onClick={() => setMostrarDetalles(estudiante)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Ver
                      </button>
                      <button 
                        onClick={() => {
                          setEstudianteSeleccionado(estudiante);
                          setShowModal(true);
                        }}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => {
                          setEstudianteSeleccionado(estudiante);
                          setShowDeleteModal(true);
                        }}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Paginación */}
        <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200 bg-gray-50">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                paginaActual === 1 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Anterior
            </button>
            <button
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
              className={`ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md ${
                paginaActual === totalPaginas 
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Siguiente
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Mostrando <span className="font-medium">{indicePrimerEstudiante + 1}</span> a <span className="font-medium">
                  {Math.min(indiceUltimoEstudiante, estudiantesFiltrados.length)}
                </span> de <span className="font-medium">{estudiantesFiltrados.length}</span> resultados
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => cambiarPagina(paginaActual - 1)}
                  disabled={paginaActual === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    paginaActual === 1 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Anterior</span>
                  &larr;
                </button>
                
                {[...Array(totalPaginas).keys()].map(numero => (
                  <button
                    key={numero + 1}
                    onClick={() => cambiarPagina(numero + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      paginaActual === numero + 1
                        ? 'z-10 bg-brand-50 border-brand-500 text-brand-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {numero + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => cambiarPagina(paginaActual + 1)}
                  disabled={paginaActual === totalPaginas}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    paginaActual === totalPaginas 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="sr-only">Siguiente</span>
                  &rarr;
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Acciones en lote para estudiantes seleccionados */}
      {estudiantesSeleccionados.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3 border border-brand-100">
          <span className="text-gray-700 text-sm">
            <strong>{estudiantesSeleccionados.length}</strong> estudiante(s) seleccionado(s)
          </span>
          <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded text-sm flex items-center">
            <FaEnvelope className="mr-1" /> Enviar mensaje
          </button>
          <button className="px-3 py-1 bg-brand-100 hover:bg-brand-200 text-brand-800 rounded text-sm flex items-center">
            <FaCheck className="mr-1" /> Marcar como pagado
          </button>
          <button className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded text-sm flex items-center">
            <FaTrash className="mr-1" /> Eliminar
          </button>
        </div>
      )}
    </div>
  );
};

export default ListaC;

