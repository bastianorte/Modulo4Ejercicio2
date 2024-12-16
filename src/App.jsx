

import NavBar from './components/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';

export default function App() {

return (
  <div>
  <NavBar />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/Equipo' element={<Equipo/>}></Route>   
        <Route path='/Contacto' element={<Contacto/>}></Route>             
      </Routes>
  <Footer/> 
  </div>
  );
  }

  