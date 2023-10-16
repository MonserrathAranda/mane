import React from 'react';
import MenuHamburguesa from './BurgerMenu';
import './MainPage.css'
import corte2 from './imagenes/corte2.jpg'
import corte4 from './imagenes/corte4.jpg'

const MainPage = ({ onLogout }) => {
  return (
    <div>
        <MenuHamburguesa />
        <br/>
      <div className='contenedor2'><h1 >Bienvenido a mi Pagina Principal</h1></div>
      <img src={corte2}></img> <img src={corte4}></img>
      <div className='contenedor'><button  onClick={onLogout}>Cerrar sesión</button></div>
      

    </div>
  );
};

export default MainPage;