import React from "react";
import {ReactComponent as SearchIcon} from "../assets/icons/search.svg"
import {ReactComponent as ShoppingBasketIcon} from "../assets/icons/shopping-basket.svg"

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <p>Beats.</p>
            </div>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    Our products
                </li>
                <li>
                    About us
                </li>
                <li>
                    Contact us
                </li>
            </ul>
            <div className="search">
                <SearchIcon className="fa"/>
                <ShoppingBasketIcon className="fa"/>
            </div>
        </nav>
        )
} 
export default Header
