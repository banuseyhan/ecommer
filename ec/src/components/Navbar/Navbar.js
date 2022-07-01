import React from 'react';
import './Navbar.css'
import UserOptions from '../UserOptions/UserOptions';

export default function Navbar({ handleLogin, returnToHomePage, itemsInBasket, openBasket }) {
 let loggedIn = true;

    return (
        <nav className="nav">
            <img onClick={() => returnToHomePage} className="nav__logo" src="C:\Users\Banu\ecommer\ec\src\Images\logo.png"></img>
            <div className="nav__options">
            
                <UserOptions
                    handleLogin={handleLogin}
                    itemsInBasket={itemsInBasket}
                    openBasket={openBasket}
                />
            </div>
        </nav>
    )
}