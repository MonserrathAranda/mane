import React, { useState } from 'react';

function MenuHamburguesa() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div>
        <button onClick={toggleMenu} style={kawaiiButtonStyle}>☰</button>
        {menuAbierto && (
            <div className="menu-desplegable" style={kawaiiMenuStyle}>
                <ul>
                    <li style={kawaiiListItemStyle}>Inicio</li>
                    <li style={kawaiiListItemStyle}>Perfil</li>
                    <li style={kawaiiListItemStyle}>Configuraciones</li>
                </ul>
            </div>
        )}
    </div>
);
}

export default MenuHamburguesa;

const kawaiiButtonStyle = {
    fontSize: '24px',
    backgroundColor: '#ffcccb',
    borderRadius: '50%',
    padding: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
};

const kawaiiMenuStyle = {
    backgroundColor: '#ffcccb',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    position: 'absolute',
    top: '40px',
    left: '0',
};

const kawaiiListItemStyle = {
    fontSize: '18px',
    padding: '5px',
    borderBottom: '1px solid #ffaaaa',
    listStyle: 'none',
};