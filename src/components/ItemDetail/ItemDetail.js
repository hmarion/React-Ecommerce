import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ( props ) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <section className="detail">
                <div>
                    <img src={props.pictureUrl} alt=''></img>
                    <p>Price: ${props.price}</p>
                    <p>Stock: {props.stock}</p>
                </div>
                <div>
                    <p>
                        Nina Q es la primer agua tónica premium concebida en la ciudad de Rosario, 
                        pensada para la coctelería. Sus sabores cítricos e intenso amargor la hacen única, 
                        irrepetible y disruptiva. Se unen las persistentes y duraderas burbujas que 
                        realzan el sabor de todas las bebidas que estén dispuestas acompañarla.
                    </p>
                </div>
            </section>
            <ItemCount stock={props.stock} />
        </div>
    );
}

export default ItemDetail;