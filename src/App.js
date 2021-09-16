import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Desafio Clase 7 - Detalle del producto
        </p>
      </header>
      <ItemListContainer greetings='Welcome to TonicStore!!!'/>
      <section>
        <ItemDetailContainer />
      </section>
    </div>
  );
}

export default App;
