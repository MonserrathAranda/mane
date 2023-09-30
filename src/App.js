import React from 'react';
import './App.css';
import { UserProvider } from './UserContext';
import UserProfile from './UserProfile';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1>Context API </h1>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
