import React from "react";
import ItemsForm from "./ItemsForm";
import "./Items.css";

const Items = (props) => {
  return (
    <>
      <li className="foods">
        <div >
            <ul><h2>{props.name}</h2>
          <div className="description">{props.desc}</div>
          <div className="prices">${props.price}</div>
         <div><ItemsForm/></div></ul>
          
        </div>
        <hr></hr>
      </li>
    </>
  );
};

export default Items;
