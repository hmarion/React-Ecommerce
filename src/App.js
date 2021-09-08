import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desafio Clase 5 - Contador con boton
        </p>
      </header>
      <ItemListContainer greetings='Welcome to TonicStore!!!'/>
      <ItemCount/>
    </div>
  );
}

export default App;
