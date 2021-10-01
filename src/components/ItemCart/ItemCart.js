import { useContext } from "react";
import  CartContextProvider from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
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
            <p className="quantity">Quantity: {item?.quantity}</p>
            <ItemCount item={item} stock={item?.quantity} button="Modificar"/>
            <button className="addCart" onClick={remove}>Eliminar Item</button>
        </div>
    );
}

export default ItemCart;