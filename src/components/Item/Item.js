import ItemCount from '../ItemCount/ItemCount';
import './Item.css'

const Item = ( props ) => {
    const image = props.img;

    return (
        <div className="itemCard">
            <p className="title">{props.title}</p>
            <img src={image} alt=''></img>
            <p className="price">${props.price}</p>
            <p>Stock: {props.stock}</p>
            <ItemCount stock={props.stock}/>
        </div>
    );
}

export default Item;