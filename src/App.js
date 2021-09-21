import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './views/Contact';

const App = () => {

  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/home">
              <ItemListContainer />
            </Route>
            <Route path="/item">
              <ItemDetailContainer />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/category/:category">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
