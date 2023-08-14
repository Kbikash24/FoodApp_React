import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Items from './Components/Items';
import Fooditems from './Fooditems'
import Card from './Components/Card'
import Cart from './Components/Cart';

function App() {

  const [CartIsShown,setCartIsshown]=useState(false)
  const showCartHandler=()=>{
    setCartIsshown(true)
  }
  const hideCartHandler=()=>{
    setCartIsshown(false)
  }
  return (

    <> 
 
    <Header onShowCart={showCartHandler}/>
 <Card>{Fooditems.map((val,index)=>(<Items key={index} name={val.name} desc={val.desc} price={val.price}/>))} </Card>
      { CartIsShown && <Cart onclose={hideCartHandler}/>}
   
   
    </>
  )
}
 
export default App;
