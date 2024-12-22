import React, { useState } from 'react';

const withMoreInfoModal = (WrappedComponent) => {
  return (props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };

    return (
      <div>
        <WrappedComponent {...props} toggleModal={toggleModal} />
        
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75 z-50">
            <div className="bg-white rounded-lg p-6 mb-6 max-w-sm w-full text-center">
            <div className="flex justify-end">
                <button
                  className="bg-primary hover:bg-secondary text-white px-2 py-2 rounded-lg text-xs"
                  onClick={toggleModal}
                >
                  X
                </button>
              </div>
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto" src={props.doctor.imagen}  alt="Bonnie image"/>
              <p><strong>Nombre:</strong> {props.doctor.genero === "m" ? 'Dr' : 'Dra'} {props.doctor.nombre}</p>
              <p><strong>Especialidad:</strong> {props.doctor.especialidad}</p>
              <p><strong>Experiencia:</strong> {props.doctor.experiencia} años</p>
              <p><strong>Telefono:</strong> {props.doctor.contacto.telefono}</p>
              <p><strong>Correo:</strong> {props.doctor.contacto.email}</p>

            </div>
          </div>
        )}
      </div>
    );
  };
};

export default withMoreInfoModal;
