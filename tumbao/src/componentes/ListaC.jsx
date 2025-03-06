  import React, { useState } from 'react';

  const ListaC = () => {
    const [estudiantes, setEstudiantes] = useState([
      {
        id: 1,
        nombreCompleto: "Juan Carlos Pérez Rodríguez",
        fechaPago: "2023-03-15",
        pagado: true
      },
      {
        id: 2,
        nombreCompleto: "María Fernanda López García",
        fechaPago: "2023-07-22",
        pagado: false
      },
      {
        id: 3,
        nombreCompleto: "Carlos Eduardo Martínez Silva",
        fechaPago: "2023-11-30",
        pagado: true
      },
      {
        id: 4,
        nombreCompleto: "Ana Patricia Ramírez Torres",
        fechaPago: "2023-05-18",
        pagado: false
      },
      {
        id: 5,
        nombreCompleto: "Luis Miguel Sánchez Morales",
        fechaPago: "2023-01-25",
        pagado: true
      },
      {
        id: 6,
        nombreCompleto: "Sofia Isabel Díaz Mendoza",
        fechaPago: "2023-09-12",
        pagado: true
      },
      {
        id: 7,
        nombreCompleto: "Roberto Antonio Cruz Vega",
        fechaPago: "2023-04-30",
        pagado: false
      },
      {
        id: 8,
        nombreCompleto: "Patricia Elena Torres Luna",
        fechaPago: "2023-12-05",
        pagado: true
      },
      {
        id: 9,
        nombreCompleto: "Diego Alejandro Ruiz Flores",
        fechaPago: "2023-08-17",
        pagado: false
      },
      {
        id: 10,
        nombreCompleto: "Carmen Rosa Medina Paz",
        fechaPago: "2023-02-28",
        pagado: true
      },
      {
        id: 11,
        nombreCompleto: "Fernando José Castro Lima",
        fechaPago: "2023-06-14",
        pagado: true
      },
      {
        id: 12,
        nombreCompleto: "Valentina Andrea Ortiz Soto",
        fechaPago: "2023-11-09",
        pagado: false
      },
      {
        id: 13,
        nombreCompleto: "Gabriel Eduardo Vargas Mora",
        fechaPago: "2023-03-21",
        pagado: true
      },
      {
        id: 14,
        nombreCompleto: "Isabella María Rojas Núñez",
        fechaPago: "2023-10-07",
        pagado: false
      },
      {
        id: 15,
        nombreCompleto: "Ricardo Daniel Paredes Sol",
        fechaPago: "2023-05-16",
        pagado: true
      },
      {
        id: 16,
        nombreCompleto: "Camila Andrea Herrera Vega",
        fechaPago: "2023-12-23",
        pagado: true
      },
      {
        id: 17,
        nombreCompleto: "Andrés Felipe Morales Ríos",
        fechaPago: "2023-07-19",
        pagado: false
      },
      {
        id: 18,
        nombreCompleto: "Laura Victoria Jiménez Paz",
        fechaPago: "2023-01-11",
        pagado: true
      },
      {
        id: 19,
        nombreCompleto: "Miguel Ángel Romero Luna",
        fechaPago: "2023-04-26",
        pagado: false
      },
      {
        id: 20,
        nombreCompleto: "Carolina Isabel Silva Cruz",
        fechaPago: "2023-09-03",
        pagado: true
      }
    ]);

    const [busqueda, setBusqueda] = useState("");

    const estudiantesFiltrados = estudiantes.filter(estudiante =>
      estudiante.nombreCompleto.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
      <div className="p-8 mt-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Lista de Estudiantes</h2>
          <input
            type="text"
            placeholder="Buscar estudiante"
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3 text-black placeholder-black"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Agregar Estudiante
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto" style={{maxHeight: "500px"}}>
          <table className="w-full">
            <thead className="sticky top-0">
              <tr className="bg-gray-100">
                <th className="px-6 py-3 text-left text-black font-semibold border-b">ID</th>
                <th className="px-6 py-3 text-left text-black font-semibold border-b">Nombre Completo</th>
                <th className="px-6 py-3 text-left text-black font-semibold border-b">Fecha de Pago</th>
                <th className="px-6 py-3 text-left text-black font-semibold border-b">Estado de Pago</th>
              </tr>
            </thead>
            <tbody>
              {estudiantesFiltrados.map((estudiante) => (
                <tr key={estudiante.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 text-black">{estudiante.id}</td>
                  <td className="px-6 py-4 text-black">{estudiante.nombreCompleto}</td>
                  <td className="px-6 py-4 text-black">{estudiante.fechaPago}</td>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-sm ${estudiante.pagado ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                      {estudiante.pagado ? 'Pagado' : 'No Pagado'}
                    </span>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600">
                      Ver más
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  export default ListaC;