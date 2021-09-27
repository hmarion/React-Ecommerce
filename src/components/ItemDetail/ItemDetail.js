import { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


const ItemDetail = ({ item }) => {
    const [itemQuantity, setItemQuantity] = useState(0)
    const [banderaItem, setBanderaItem] = useState(false)

    useEffect(() => {
        if(itemQuantity > 0){
            setBanderaItem(true)
        }else{
            setBanderaItem(false)
        }
    }, [itemQuantity])
    
    
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
            <ItemCount item={item} stock={item?.stock} bandera={banderaItem}/>
        </div>
    );
}

export default ItemDetail;