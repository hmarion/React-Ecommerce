import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desafio Clase 6 - Catalogo con Maps y promises
        </p>
      </header>
      <ItemListContainer greetings='Welcome to TonicStore!!!'/>
    </div>
  );
}

export default App;
