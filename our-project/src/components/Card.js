import React from 'react'

function Card({ Card, coffee }) {

    const { image, title, description } = coffee

  return (
    <li className="card">
        <div className="image">
            <img
                src={image}
                alt={title}
            />
        </div>
        <div>
            <div className="card_content">
                <div className="card_title">{title}</div>
                <p className="card_text">{description}</p>
            </div>
        </div>
    </li>
  )
}

export default Card