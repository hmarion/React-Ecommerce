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

    const getQuantity = () => {
        let count = 0
        if(!(listItem === undefined)){
            listItem.forEach(item => {
                count = count + item.quantity
            });
        }
        return count
    }

    const getTotalPrice = () => {
        let price = 0
        if(!(listItem === undefined)){
            listItem.forEach(item => {
                price = price + (item.price * item.quantity)
            });
        }
        return price
    }

    const removeItem = (itemId) => {
        const newList = listItem.filter((item) => item.id !== itemId);
        if(getQuantity() === 0){
            setListItem(undefined)    
        }else{
            setListItem(newList)
        }        
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
            isInCart,
            getQuantity,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
    
}

export default CartContext;