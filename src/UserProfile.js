import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function UserProfile() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <>
          <p>Bienvenido!, {user.username}!</p>
          <button onClick={logout}>Cerrar Sesion</button>
        </>
      ) : (
        <>
          <p>Please log in:</p>
          <button onClick={() => login('Maane')}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;