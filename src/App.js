import React from 'react';
import './App.css';
import Header from './Components/Header';
import Items from './Components/Items';
import Fooditems from './Fooditems'
import Card from './Components/Card'

function App() {
  return (

    <> 
    <Header/>
 <Card>{Fooditems.map((val,index)=>(<Items key={index} name={val.name} desc={val.desc} price={val.price}/>))} </Card>
     
    
   
   
    </>
  )
}
 
export default App;
