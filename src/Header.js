import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";



function Header(){

    const [{basket,loggedinuser},dispatch] = useStateValue();

    //console.log("my basket", basket)
    const logoutUser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }


    return(
        <nav className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

        <div class="header__nav">
            <Link to= /*{loggedinuser && */"/login"/*}*/ className="header__link">
            <div onClick={logoutUser} className="header__option">
                <span className="header__optionLineone">Hello, {loggedinuser?.email}</span>
                <span className="header__optionLinetwo">{loggedinuser ? 'Signout' : "Sign In"}</span>
            </div>
            </Link>

            <Link to="/" className="header__link">
            <div className="header__option">
                <span className="header__optionLineone">returns</span>
                <span className="header__optionLinetwo">& Orders</span>
            </div>
            </Link>

           
        </div>
        <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
                <ShoppingBasketIcon/>
            <span className="header_optionLinetwo header__productCount">{basket?.length}</span>
            </div>

        </Link>
        </nav>
    )
}

export default Header