import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verifica las credenciales (esto es solo un ejemplo)
    if (email === 'monse@email.com' && password === '12345') {
      onLogin(true);
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className='content'><h1>Login</h1></div>
      <br/>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
         // Agrega un espacio entre los campos
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
     // Agrega un espacio entre los campos
      />
      <br/>
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
    

  );
};

export default Login;