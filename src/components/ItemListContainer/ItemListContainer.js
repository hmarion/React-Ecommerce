import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <p className="text">
            {props.greetings}
        </p>
    )
}

export default ItemListContainer;