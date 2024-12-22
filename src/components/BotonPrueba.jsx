import React from 'react';

const BotonPrueba = ({ doctor, toggleModal }) => {
  return (
    <div className="doctor-card">
      <button
        onClick={toggleModal}
        className="px-4 py-2 rounded-lg bg-primary hover:bg-secondary text-white hover:text-white"
      >
        Más información
      </button>
    </div>
  );
};

export default BotonPrueba;