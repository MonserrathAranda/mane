// App.js
import React from 'react';
import './App.css';
import { AuthProvider } from './AuthContext';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <h1>App de Inicio de Sesión</h1>
        <LoginForm />
        <HomePage />
      </div>
    </AuthProvider>
  );
}

export default App;