import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [listBebidas, setListBebidas] = useState([])
    const { category } = useParams()
    const [bandera, setBandera] = useState(false)


    useEffect(() =>  {

        if(!category){
            getDocs(collection(db, 'items')).then((QuerySnapshot) => {
                const list = QuerySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setListBebidas(list)
            }).catch((error) => {
                console.log('Error searching items', error);
            }).finally(() => {
                setBandera(true)
            })
        }else {
            getDocs(query(collection(db, 'items'), where('category', '==', category))).then((QuerySnapshot) =>{
                const list = QuerySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setListBebidas(list)
            }).catch((error) => {
                console.log('Error searching category', error);
            }).finally(() => {
                setBandera(true)
            })
        }
        return (() => {
            setListBebidas(undefined)
            setBandera(false)
        })
        
    }, [category])
    
    return (
        <div>
            <ItemList list={listBebidas} bandera={bandera}/>
        </div>
    );
}

export default ItemListContainer;