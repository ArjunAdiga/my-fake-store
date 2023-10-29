
import React,{useEffect, useState} from "react";
import {FaTrash} from 'react-icons/fa'
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, title, price, }) => {
    const {removeItem} = useCartContext()
  const [cartCount, setCartCount] = useState(1);
  const [prices,setPrices]=useState(0)
  const MAX_LENGTH=20;
  const increaseCart = () => {
    setCartCount((prev) => prev + 1);
  };
  const decreaseCart = () => {
    if (cartCount > 1) {
        setCartCount((prev) => prev - 1) 
  };
}
//   useEffect(() => {

//   },[])
  return (
    <div>
      <div className="flex flex-row justify-between  pb-2">
        <div className="flex flex-row m-2 min-w-[150px]">
          <img className="h-6 w-6 " src={image} alt="" />
          <span>{title.length > MAX_LENGTH ? title.substring(0,MAX_LENGTH) : title }</span>
        </div>
        <div className="m-2">
          <p>$ {price}</p>
        </div>
        <div className="flex flex-row justify-center items-center ">
          <button onClick={decreaseCart} className="m-2" >
            -
          </button>
          <div>{cartCount}</div>
          <button onClick={increaseCart} className="m-2">
            +
          </button>
        </div>
        <div className="m-2">$ {price*cartCount}</div>
        <div className="m-2">
           <FaTrash className='remove_icon' onClick={() => removeItem(id)}/>
        </div>
      </div>     
    </div>
  );
};

export default CartItem;
