import './NavBar.css'
import logo2 from '../../Logo.png'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <div className='LeftNav'>
                <a href='../../index.html'><img className="App-logo2" src={logo2} alt='Logo'></img></a>
                <button className='botonInicio'>Inicio</button>
            </div>
            <ul className='CenterNav'>
                <button className='botonMenu'>Home</button>
                <button className='botonMenu'>Products</button>
                <button className='botonMenu'>Conctact</button>
            </ul>
            <div className='RightNav'>
                <form className='itemForm'>
                    <input placeholder='Search' aria-label='Search'></input>
                    <button type='submit'>Search</button>
                </form>
                <button className='botonLogin'>Login</button>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;