import React from "react";
const CartContext=React.createContext({
    items:[],
     addItem: (item)=>{},
    removeItem:(id)=>{},
    addamount:(id)=>{},
    removeamount:(id)=>{},
   
});

export default CartContext;