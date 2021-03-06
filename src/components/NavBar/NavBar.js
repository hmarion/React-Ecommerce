import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import logo2 from '../../Logo.png'
import CartWidget from '../CartWidget/CartWidget'
import CartContextProvider from "../../context/CartContext";
import { useContext, useEffect } from 'react';

const NavBar = () => {
    const { getQuantity } = useContext(CartContextProvider);

    useEffect(() =>  {
        getQuantity()
    }, [getQuantity])

    return (
        <nav className='NavBar'>
            <div className='LeftNav'>
                <Link to={`/`}><img className="App-logo2" src={logo2} alt='Logo'></img></Link>
            </div>
            <NavLink className="link" to={`/home`} activeClassName="currectCategory">Products</NavLink>
            <NavLink className="link" to={`/contact`} activeClassName="currectCategory">Conctact</NavLink>
            <NavLink className="link" to={`/category/tonicas`} activeClassName="currectCategory">Tonicas</NavLink>
            <div className='RightNav'>
                <form className='itemForm'>
                    <input placeholder='Search' aria-label='Search'></input>
                    <button type='submit'>Search</button>
                </form>
                <button className='botonLogin'>Login</button>
                {getQuantity() > 0 ? <CartWidget/> : ''}
            </div>
        </nav>
    )
}

export default NavBar;