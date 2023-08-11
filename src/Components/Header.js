import React from "react";
import '../App.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header=props=>{
    return<><nav> <div className='nav-up'><h1 className='title'>ReactMeals</h1>
    <button className='cart'>
        <span><ShoppingCartIcon/></span>
        <span><h3>Cart</h3></span>
        <span className="num">0</span>
        </button>
        </div>
    <img src='https://source.unsplash.com/1300x200/?indianfoods' alt='img'></img></nav></>
    
}
export default Header;