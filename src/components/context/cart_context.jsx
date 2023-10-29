import { createContext, useReducer,useContext } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext()

const initialState = {
    cart : [] ,
    total_item : '',
    total_amount:''
}

const CartProvider = ({children}) => {
    const [state,dispatch] =useReducer(reducer,initialState)
    const addToCart=(id,image, title, price, category, rating) => {
        dispatch({type:'ADD_TO_CART',payload: {
            id,  image, title, price, category, rating
        }})
    }
    const removeItem = (id) => {
        dispatch({type:'REMOVE_ITEM',payload:id})
    }
    return <CartContext.Provider value={{...state,addToCart,removeItem}}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider,useCartContext}