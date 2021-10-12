import Item from '../Item/Item';
import './ItemList.css';
import logo from '../../logo.svg';


const ItemList = ({ list, bandera }) => {
    
    return (
        <div className="listado">
            {bandera ? list?.map (bebidas =>  <Item key={bebidas.id} item={bebidas}/>) : <img src={logo} className="App-logo" alt="logo" />}
        </div>
    );
}

export default ItemList;

