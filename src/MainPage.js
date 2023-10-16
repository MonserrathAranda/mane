import React from 'react';
import MenuHamburguesa from './BurgerMenu';
import './MainPage.css'

const MainPage = ({ onLogout }) => {
  return (
    <div>
        <MenuHamburguesa />
        <br/>
      <div className='contenedor2'><h1 >Bienvenido a mi Pagina Principal</h1></div>
      <div className='contenedor'><button  onClick={onLogout}>Cerrar sesión</button></div>

    </div>
  );
};

export default MainPage;