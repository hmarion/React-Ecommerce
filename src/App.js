import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desafio Clase 2 - Crear menu e-commerce
        </p>
      </header>
    </div>
  );
}

export default App;
