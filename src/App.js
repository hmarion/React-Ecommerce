import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Contact from './views/Contact';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './context/CartContext';
import './App.css';
import cartForm from './views/cartForm';


const App = () => {

  return (
    <div className="App">
      <header>
        <CartContextProvider>
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
              <Route path="/cart/cartform">
                <cartForm />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;
