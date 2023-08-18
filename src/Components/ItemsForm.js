import { useContext, useState } from 'react';
import './ItemsForm.css';
import React from 'react';
import cartCntxt from '../Store/CartContext';

const ItemsForm = (props) => {
    const [quantity, setQuantity] = useState(1);
    const cartcntxt = useContext(cartCntxt);

    const addItemToCart = (event) => {
        event.preventDefault();
        cartcntxt.addItem({ ...props.item, amount: quantity });
        
    };

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    return (
        <form className="form">
            <input
                id={'Amount_' + props.id}
                type='number'
                value={quantity}
                onChange={handleQuantityChange}
                max={5}
                min={1}
                step={1}
            />
            <button onClick={addItemToCart}>+Add</button>
        </form>
    );
};

export default ItemsForm;
