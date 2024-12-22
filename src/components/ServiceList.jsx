import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuAmbulance } from "react-icons/lu";
import { GiHealthNormal } from "react-icons/gi";

const ServiceList = ({}) => {

  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    // Simular una API
    setServicios([
    { id: 1, nombre: 'Consultas', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <CiSearch className="h-6 w-6 text-blue-500" /> },
    { id: 2, nombre: 'Urgencias', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <LuAmbulance className="h-6 w-6 text-blue-500" /> },
    { id: 3, nombre: 'Especialidades', texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam soluta culpa commodi assumenda quae rem perspiciatis cum ipsam dolores, nesciunt deserunt quo. Quae rerum optio eaque distinctio voluptatum ab!", icon: <GiHealthNormal className="h-6 w-6 text-blue-500" /> }
  ]);
}, []);

    return (
        <div className="bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-2xl text-center pb-8">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl">Servicios</h2>
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-3 lg:px-8 xl:grid-cols-3">
        {servicios.map(({ id, nombre, texto, icon }) => (
        <div key={id} className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-light">
        <div className="flex flex-col items-center p-6">
            {icon}
            <h5 className="mb-1 text-xl font-medium text-primary">{nombre}</h5>
            <span className="text-sm text-primary">{texto}</span>
            <div className="flex mt-4 md:mt-6">

            </div>
        </div>
    </div>
        ))}
      </div>
      </div>      
    );
  };

export default ServiceList