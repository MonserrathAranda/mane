import React from 'react';
import { useAuth } from './AuthContext';

function HomePage() {
  const { user, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h2>Bienvenido, {user.username}</h2>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      ) : (
        <p>Por favor, inicia sesión.</p>
      )}
    </div>
  );
}

export default HomePage;