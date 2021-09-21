import { NavLink } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ({ item }) => {

    return (
        <NavLink to={`/item/${item.id}`}>
            <div className="itemCard">
                <p className="title">{item?.title}</p>
                <img className="image" src={item?.pictureUrl} alt={item?.title}></img>
                <p className="price">${item?.price}</p>
                <ItemCount stock={item?.stock}/>
            </div>
        </NavLink>
    );
}

export default Item;