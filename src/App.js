import React from 'react';
import './App.css';
import Header from './Components/Header';
import Items from './Components/Items';
import Fooditems from './Fooditems'

function App() {
  return (

    <> 
    <Header/>
    <div className='items'>
     {Fooditems.map((val,index)=>(<Items key={index} name={val.name} desc={val.desc} price={val.price}/>))}
    
   </div>
   
    </>
  )
}
 
export default App;
