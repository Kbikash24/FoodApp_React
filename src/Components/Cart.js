import Modal from "./Modal";
import classes from './Cart.module.css'
import React, { useContext } from 'react';
import CartContext from '../Store/CartContext';



const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const cartItems = cartContext.items.map((item) => (
    <li key={item.id}>{item.name}   {item.amount}</li>
  ));

  const totalAmount = cartContext.items.reduce(
    (total, item) => total + parseFloat(item.price) * parseInt(item.amount),
    0
  );

  return (
    <Modal onclose={props.onclose}>
      <ul className={classes['cart-items']}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onclose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
