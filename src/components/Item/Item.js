import { NavLink } from 'react-router-dom';
import './Item.css'

const Item = ({ item }) => {

    return (
        <div className="itemCard">
            <NavLink to={`/item/${item.id}`}>
                <p className="title">{item?.title}</p>
                <img className="image" src={item?.pictureUrl} alt={item?.title}></img>
                <p className="price">${item?.price}</p>
            </NavLink>
        </div>
    );
}

export default Item;