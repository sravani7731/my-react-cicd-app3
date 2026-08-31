import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to My React App!</h1>
      <p>Deployed automatically via GitHub Actions CI/CD to Ubuntu Server.</p>
      <br />
      <img 
        src={logo} 
        alt="React Logo" 
        style={{ width: '200px', height: '200px' }} 
      />
    </div>
  );
}

export default App;