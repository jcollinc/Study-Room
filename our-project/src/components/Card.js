import React, { useState } from 'react'

function Card({ coffee, name, handleClaim, coffeeOrder, }) {

    const { image, title, description } = coffee

    return (
        <div className="card-container">
            <li className="card">
                <div className="image">
                    <img
                        src={image}
                        alt={title}
                    />
                </div>
                <div className="description">    
                    <div className="card_content">
                        <div className="card_title">{title}</div>
                        <p className="card_text">{description}</p>
                        {name ? 
                            <button 
                                id={title} 
                                onClick={handleClaim} 
                                className={coffeeOrder.includes(title) ? "button-claimed" : "card_button"}
                            >
                                {coffeeOrder.includes(title) ? "Ordered!" : "Order"}
                            </button> : null}
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Card


