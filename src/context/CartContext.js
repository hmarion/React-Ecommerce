import { createContext, useState } from "react"

const CartContext = createContext()

export const AddItemCart = ({children}) => {
    const [listItem, setListItem]   = useState([])

    const addItem = (item1, quantity) => {
        const item = {
            ...item1,
            quantity: quantity
        }
        setListItem([...listItem, item])
        console.log(listItem);
    }

    const removeItem = (itemid) => {

    }

    const clear = () => {
        setListItem([])
    }

    const isInCart = (id) => {
        const item = listItem.filter(productos => productos.id === id)
        if(item === 'undefined'){
            return false
        }else{
            return true
        }
    }
    return(
        <CartContext.Provider valule={{
            listItem,
            addItem,
            removeItem,
            clear,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContext;