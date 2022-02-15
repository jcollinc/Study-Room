import React from 'react'

function Card({ coffee }) {

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
                        <button className="card_button">Add to Cart</button>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Card