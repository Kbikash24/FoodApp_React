// Inside CartProvider.js
import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [itemQuantities, setItemQuantities] = useState({});

    const addItemToCartHandler = (item) => {

        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
            // If the item exists, update its quantity
            const updatedCartItems = [...cartItems];
            updatedCartItems[existingItemIndex].amount += item.amount;
            setCartItems(updatedCartItems);
        }
else{
        setCartItems((prevItems) => [...prevItems, item]);
}
    };

    const removeItemFromCartHandler = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
        setItemQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[id];
            return updatedQuantities;
        });
    };

    const getTotalItems = () => {
        return Object.values(itemQuantities).reduce((total, quantity) => total + quantity, 0);
    };

    const cartContext = {
        items: cartItems,
        itemQuantities: itemQuantities,
        totalItems: getTotalItems(),
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
