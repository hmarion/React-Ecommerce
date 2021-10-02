import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import logo from '../../logo.svg';
import { db } from '../../services/firebase/firebase'
import { doc, getDoc} from 'firebase/firestore'


const ItemDetailContainer = () => {
    const { id } = useParams()
    const [bebida, setBebida] = useState([])
    const [bandera, setBandera] = useState(false)


    useEffect(() =>  {
        getDoc(doc(db, 'items', id)).then((QuerySnapshot) =>{
            const item = { id: QuerySnapshot.id, ...QuerySnapshot.data()}
            setBebida(item)
        }).catch((error) => {
            console.log('Error searching item', error);
        }).finally(() => {
            setBandera(true)
        })

        return (() => {
            setBebida(undefined)
        })

    }, [id])

    return (
        <>
            {bandera ? <ItemDetail item={bebida}/> : <img src={logo} className="App-logo" alt="logo" />}
        </>
    )
}

export default ItemDetailContainer;