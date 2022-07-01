
import React from 'react';
import './Hero.css';


export default function Hero({ openShoppingPage }) {

    fetch('https://fakestoreapi.com/products')
       .then(response => response.json())
        .then(data => {
             console.log(data);
         })

    return (
        <div className="hero">
            <div className="hero-div hero-div__text">
                <h2 className="hero-div__text--header">Shopping </h2>
                <p className="hero-div__text--description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias voluptatibus magnam a eius porro. Repellendus beatae delectus dolorem numquam magni!</p>
                <button onClick={() => openShoppingPage('')} className="hero-div__text__button btn-primary">Start Shopping</button>
            </div>
            <div className="hero-div hero-div__image">
               
            </div>
        </div>
    )
}