

const cartReducer = (state,action) => {
    if(action.type === 'ADD_TO_CART') {
        let {key,image, title, price, category, rating} =action.payload
        let cartProduct;
        cartProduct= {
            id:title,
            title,
            price,category,rating ,image
        }
        return  {...state,cart:[...state.cart,cartProduct],}
    }
    if(action.type === 'REMOVE_ITEM') {
        let updatedCart = state.cart.filter(
            (curElem) => curElem.id !== action.payload
        )
        return {...state,cart:updatedCart}
    }
    return state
  
}

export default cartReducer