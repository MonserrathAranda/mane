import React from 'react';
import MenuHamburguesa from './BurgerMenu';
import './MainPage.css'

const MainPage = ({ onLogout }) => {
  return (
    <div>
        <MenuHamburguesa />
      <h1>Página Principal</h1>
      <div className='contenedor'><button  onClick={onLogout}>Cerrar sesión</button></div>
      {/* Aquí puedes agregar tu menú hamburguesa */}
    </div>
  );
};

export default MainPage;