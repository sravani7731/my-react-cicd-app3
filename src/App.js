import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to My React App!</h1>
      <p>Deployed automatically via GitHub Actions CI/CD to Ubuntu Server.</p>
      <img src={logo} className="App-logo" alt="logo" style={{ height: '250px' }} />
    </div>
  );
}

export default App;