import Modal from "./Modal";
import classes from './Cart.module.css'


const Cart = (props) => {
  const CartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Paneer tikka", amount: "3", price: "12.6" }].map(
        (items) => (
          <li>{items.name}</li>
        )
      )}
    </ul>
  );

  return (
    <Modal onclose={props.onclose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>50</span>
      </div>
      <div  className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onclose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
  );
};
export default Cart;