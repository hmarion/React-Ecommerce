import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [listItem, setListItem]   = useState()

    const addItem = (item1, quantity) => {
        if(!isInCart(item1.id)){
            const item = {
                ...item1,
                quantity: quantity
            }
            if(listItem === undefined){
                setListItem([item])
            }else{
                setListItem([...listItem, item])
            }   
        }else{
            console.log("El producto ya se encuentra registrado");
        }      
    }

    const removeItem = (itemId) => {
        const newList = listItem.filter((item) => item.id !== itemId);
        setListItem(newList)
    }

    const clear = () => {
        setListItem(undefined)
    }

    const isInCart = (id) => {
        if(listItem === undefined){
            return false
        }else{
            const item = listItem.find(productos => productos.id === id)
            if(item === undefined){
                return false
            }else{
                return true
            }
        }
    }

    return(
        <CartContext.Provider value={{
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