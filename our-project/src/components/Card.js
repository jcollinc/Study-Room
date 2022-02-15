import React from 'react'

function Card({ coffee }) {

    const { fName, image, title, description } = coffee

    return (
        <li className="card">
            <div className="image">
                <img
                    src={image}
                    alt={title}
                />
            </div>
            <div className="description">    
                <div className="card_content">
                    <div className="card_name">{fName}</div>
                    <div className="card_title">{title}</div>
                    <p className="card_text">{description}</p>
                </div>
            </div>
            <button className="card_button">Add to Cart</button>
        </li>
    )
}

export default Card