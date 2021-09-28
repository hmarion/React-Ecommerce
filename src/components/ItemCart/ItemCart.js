import { useContext } from "react";
import  CartContextProvider from "../../context/CartContext";
import './ItemCart.css';

const ItemCart = ({ item }) => {
    const { removeItem } = useContext(CartContextProvider);

    const remove = () => {
        removeItem(item.id)
    }

    return (
        <div className="itemCard">
            <p className="title">{item?.title}</p>
            <img className="image" src={item?.pictureUrl} alt={item?.title}></img>
            <p className="quantity">${item?.quantity}</p>
            <button className="addCart" onClick={remove}>Eliminar Item</button>
        </div>
    );
}

export default ItemCart;