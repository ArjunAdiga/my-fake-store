import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import Header from "../Header";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCartContext();
  // const [totalAmout,setTotalAmount] = useState(0)
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">Our Cart</h1>
      <div className="ml-6 mb-4 ">
          <div className="flex flex-row justify-between p-2 border-b border-gray-300 font-bold">
            <div className="min-w-[150px]">
              <p>Product</p>
            </div>
            <div >
              <p>Price</p>
            </div>
            <div className="">
              <p>Quantity</p>
            </div>
            <div className="">
              <p>Total</p>
            </div>
            <div>
              <p>{' '}</p>
            </div>
          </div>
          {/* <div className="flex flex-row justify-between">  */}
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          {/* </div> */}
      </div>
      {/* <div className="justify-center text-justify flex">
          Total Amount : {totalAmout}
      </div> */}
    </div>
  );
};

export default Cart;
