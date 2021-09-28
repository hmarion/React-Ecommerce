import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
     
    return (
        <div>
            <h1>{item?.title}</h1>
            <section className="detail">
                <div>
                    <img className="image" src={item?.pictureUrl} alt={item?.title}></img>
                </div>
                <div className="detailItem">
                    <p>Price: ${item?.price}</p>
                    <p>Stock: {item?.stock}</p>
                    <p>Category: {item?.category}</p>
                </div>
            </section>
            <ItemCount item={item} stock={item?.stock}/>
        </div>
    );
}

export default ItemDetail;