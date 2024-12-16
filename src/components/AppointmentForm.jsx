import { useState } from 'react'

export default function AppointmentForm() {

  // Estados para almacenar los valores del formulario
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  // Función que maneja el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Evitar recarga de la página

    // Mostrar los datos ingresados en la consola o realizar una acción
    console.log('Cita solicitada:');
    console.log(`Nombre: ${nombre}`);
    console.log(`Especialidad: ${especialidad}`);    
    console.log(`Fecha: ${fecha}`);
    console.log(`Hora: ${hora}`);

    // Limpiar el formulario después de enviarlo (opcional)
    setNombre('');
    setEspecialidad('');
    setFecha('');
    setHora('');
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-primary sm:text-4xl">Formulario de contacto</h2>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={manejarEnvio}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              Nombre completo
            </label>
            <div className="mt-2.5">
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
              Especialidad
            </label>
            <div className="mt-2.5">
              <input
                id="nombre"
                type="text"
                value={especialidad}
                onChange={(e) => setEspecialidad(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>          
          <div className="sm:col-span-2">
            <label htmlFor="fecha" className="block text-sm/6 font-semibold text-gray-900">
              Fecha de la cita:
            </label>
            <div className="mt-2.5">
              <input
                type="date"
                id="fecha"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="hora" className="block text-sm/6 font-semibold text-gray-900">
              Hora de la cita:
            </label>
            <div className="mt-2.5">
              <input
                type="time"
                id="hora"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-gray-900">
              Teléfono
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="(+569) 9999 9999"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Solicitar cita
          </button>
        </div>
      </form>
    </div>
  )
}