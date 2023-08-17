import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Items from './Components/Items';
import Fooditems from './Fooditems';
import Card from './Components/Card';
import Cart from './Components/Cart';
import CartProvider from '../src/Store/CartProvide';

function App() {
    const [CartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            <Header onShowCart={showCartHandler} />
            <Card>
                {Fooditems.map((item) => (
                    <Items
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                    />
                ))}
            </Card>
            {CartIsShown && <Cart onclose={hideCartHandler} />}
        </CartProvider>
    );
}

export default App;
