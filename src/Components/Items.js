import React from "react";
import './Items.css' 


const Items=(props)=>{
   return(
    <>
    <div className="foods">
        <h3>{props.name}</h3>
       <span> <p>{props.desc}</p></span>
        <h3>${props.price}</h3>
        <hr></hr>
        
    </div>
    </>
   )

}
export default Items;