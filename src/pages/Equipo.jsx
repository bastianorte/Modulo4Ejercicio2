import DoctorCard from "../components/DoctorCard"
import Header from '../components/Header';
import doctores from '../components/doctores.json';
import React, { Profiler } from 'react';

const Equipo = () => {

    const onRenderCallback = (
        id, // El id del componente renderizado
        phase, // 'mount' o 'update'
        actualDuration, // Tiempo de renderizado real
        baseDuration, // Tiempo estimado de renderizado
      ) => {
        console.log('Renderizado:', id , 'Fase:', phase, 'Duración real:', actualDuration, 'Duración base:', baseDuration);
      };    

    return (
        <div>
            <Header title="Equipo médico" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet, ante id pellentesque ullamcorper, purus ex pellentesque mi, id tempor ligula arcu et nisi. Sed sit amet orci facilisis, posuere erat sed, luctus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ut purus sit amet mi tristique facilisis. Curabitur scelerisque erat vel lorem fringilla pharetra. Donec nisl metus, semper eget pretium a, pellentesque eget eros. Sed aliquet faucibus porttitor. Maecenas tempor ligula ipsum, id tempus lorem congue a. Etiam eget fringilla magna. Vestibulum at sem nisl. Sed pellentesque non augue ut elementum. " className="header-style"/>
            <Profiler id="Doctores" onRender={onRenderCallback}>
            <DoctorCard doctores={doctores} />
            </Profiler>
        </div>
    )
}

export default Equipo