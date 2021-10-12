import { addDoc, collection, doc, getDoc, Timestamp, writeBatch } from "@firebase/firestore";
import { db } from '../../services/firebase/firebase'
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import  CartContextProvider from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";

const Cart = () => {
    const { listItem, clear, getTotalPrice } = useContext(CartContextProvider);
    const [price, setPrice] = useState(0)

    useEffect(() =>  {
        setPrice(getTotalPrice())
    }, [getTotalPrice])

    const createOrder = () => {

        const order = {
            buyer: "usuario1",
            phone: "111-1111",
            email: "asdasuhdi@adhausd.com",
            items: listItem,
            date: Timestamp.fromDate(new Date()),
            total: getTotalPrice()
        }

        const batch = writeBatch(db)
        const outOfStock = []

        order.items.forEach((item, i) => {
            getDoc(doc(db, 'items', item.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= order.items[i].quantity) {
                    batch.update(doc(db, 'items', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - order.items[i].quantity
                    })
                }else{
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), order).then(DocumentSnapshot => {
                batch.commit().then(() => { 
                    alert("La compra se realizo con exito con el id " + DocumentSnapshot.id);
                })
            }).catch((err) => {
                console.log("No se pudo ejecutar la compra");
            }).finally(() => {
                clear()
            })
        }else {
            console.log("No hay stock de alguno de los productos comprados");
        }

    }

    return (
        <>  
            { price !== 0 ? 
                <>
                    <h1>Total de la Compra: ${price}</h1>
                    <button className="addCart" onClick={clear}>Vaciar Carrito</button>
                    <NavLink to="/"><button className="addCart">Seguir comprando</button></NavLink>
                    <button className="addCart" onClick={() => createOrder()}>Finalizar la compra</button>
                    <div className="listado">
                        {listItem?.map (bebidas =>  <ItemCart key={bebidas.id} item={bebidas}/>) }
                    </div>
                </> 
            :   <>
                    <h1>"El Carrito esta vacio"</h1>
                    <NavLink to="/"><button className="addCart" onClick={clear}>Volver al Inicio</button></NavLink>
                </>}
        </>
    );
}

export default Cart;