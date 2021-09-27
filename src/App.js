import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './views/Contact';
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext'
import './App.css';


const App = () => {

  return (
    <div className="App">
      <header>
        <CartContext.Provider value={CartContext}>
          <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="/home">
                <ItemListContainer />
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
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartContext.Provider>
      </header>
    </div>
  );
}

export default App;
