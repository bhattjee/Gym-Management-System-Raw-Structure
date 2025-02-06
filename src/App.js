import React from 'react';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';

function App() {
  return (
    <div className="App">
      <h1>Gym Management System</h1>
      <Login />
      <Signup />
    </div>
  );
}

export default App;