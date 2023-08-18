import Modal from "./Modal";
import classes from "./Cart.module.css";
import React, { useContext } from "react";
import CartContext from "../Store/CartContext";
import "./Cart.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  
 
  const cartItems = cartContext.items.map((item) => {
     
    const IncAmount = () => {
      cartContext.addamount(item.id);
    };

    const DcAmount = () => {
      cartContext.removeamount(item.id);
    };

  return(  <li key={item.id} className="Cart-item">
      <span className="item-name">{item.name}</span>
      <div>
        
        <span className="item-price">₹{item.price}</span>
        <span className="item-amount">x {item.amount}</span>
      </div>
      <button className="minus" onClick={DcAmount}>-</button>
      <button className="plus" onClick={IncAmount}>+</button>
    
    </li>
    )});

  const totalAmount = cartContext.items.reduce(
    (total, item) => total + parseFloat(item.price) * parseInt(item.amount),
    0
  );

  return (
    <Modal onclose={props.onclose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onclose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
