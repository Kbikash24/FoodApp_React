import React from "react";
import "../App.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
const Header = (props) => {
  return (
    <>
      <nav>
    
        <div className="nav-up">
          <h1 className="title">ForkFleet<DinnerDiningIcon/></h1>
          <button className="cart" onClick={props.onShowCart}>
            <span>
              <ShoppingCartIcon />
            </span>
            <span>
              <h3>Cart</h3>
            </span>
            <span className="num">0</span>
          </button>
        </div>
       
      </nav>
    <div className="img"><img
          src="https://source.unsplash.com/1300x400/?biryani"
          alt="img"
        ></img></div>  
      <div className="summary">
        <h2>ForkFleet: Savor Delights, Order with Ease</h2>
        <p>
          ForkFleet is your ultimate food ordering app designed to elevate
          your dining experience. Discover a world of culinary delights at your
          fingertips as you browse through a diverse range of restaurants and
          cuisines. With our user-friendly interface, placing your favorite
          meals for delivery or pickup is a breeze. 
        </p>
      </div>
    </>
  );
};
export default Header;
