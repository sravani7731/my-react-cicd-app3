import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to My React App!</h1>
      <p>Deployed automatically via GitHub Actions CI/CD to Ubuntu Server.</p>
      <br />
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
        alt="React Logo" 
        style={{ width: '200px', height: '200px' }} 
      />
    </div>
  );
}

export default App;