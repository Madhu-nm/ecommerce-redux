import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";


export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? <p>No items in cart</p> : (
        <>
          {cart.map(item => (
            <div key={item.id} className="item">
              <img src={item.img} alt={item.name} />
              <span>{item.name}</span>
              <span> - Rs:{item.price}</span>
              <span> x {item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
              <button onClick={() => dispatch(removeFromCart(item))}>-</button>
            </div>
          ))}
          <h3>Total: Rs.{total}</h3>
        </>
      )}
    </div>
  );
}
