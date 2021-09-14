import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <div>
            <p className="text">
                {props.greetings}
            </p>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;