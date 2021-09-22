import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';
import './ItemList.css';
import logo from '../../logo.svg';

const productos = [
    {id: '1', title: 'Agua Tonica Nina', price: '209', pictureUrl: './images/ninaqHibiscus.jpg', stock: 23, category: 'tonicas'},
    {id: '2', title: 'Agua Tonica P Blanco', price: '163', pictureUrl: './images/AT_pb_1s.jpg', stock: 5, category: 'tonicas'},
    {id: '3', title: 'Agua Tonica Sta Quina', price: '249', pictureUrl: './images/santaquina.jpg', stock: 10, category: 'tonicas'},
    {id: '4', title: 'Gin Ciervo', price: '1199', pictureUrl: './images/gin-ciervo-del-pantano.jpg', stock: 8, category: 'gin'},
    {id: '5', title: 'Combo Mix TonicStore + Príncipe de los apóstoles', price: '2039', pictureUrl: './images/combo1.jpg', stock: 3, category: 'combos'}
]

function getList(){
    return new Promise((result, reject) => {
        setTimeout(() => result(productos), 2000)
    })
}

const ItemList = () => {
    const [listBebidas, setListBebidas] = useState([])
    const { category } = useParams()
    const [bandera, setBandera] = useState(false)


    useEffect(() =>  {
        const list = getList()

        if(!category){
            list.then(list => {
                setListBebidas(list)
                setBandera(true)
            })
        }else {
            list.then(list => {
                const bebidas = list.filter(productos => productos.category === category)
                setListBebidas(bebidas)
                setBandera(true)
            })
        }
        return (() => {
            setListBebidas(undefined)
            setBandera(false)
        })
        
    }, [category])

    return (
        <div className="listado">
            {bandera ? listBebidas?.map (bebidas =>  <Item key={bebidas.id} item={bebidas}/>) : <img src={logo} className="App-logo" alt="logo" />}
        </div>
    );
}

export default ItemList;

