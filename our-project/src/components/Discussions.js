import React, { useState, useEffect } from 'react'

function Discussions({ handleAddItem }) {

	const [comment, setComment] = useState('')
	const [name, setName] = useState('')
	const [error, setError] = useState('')
	const [suggestions, setSuggestions] = useState([])

    function handleSubmit(e) {
      e.preventDefault();
  
      const formData = { comment }
      
      {/* Controlled form input validation! */}
      if (comment.length > 0) {
        setError([])
  
        fetch("http://localhost:3000/suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newItem => {
          handleAddItem(newItem)
        })
      } else {
        setError(["Add a suggestion!"])
      }
    }

	useEffect(() => {
		fetch('http://localhost:3000/suggestions')
		.then(res => res.json())
		.then(suggestions => {
			setSuggestions(suggestions)
		})
	}, [])

	let itemsToDisplay = suggestions.map(suggestion => <p key={suggestion.id}>{suggestion.name} {suggestion.comment} </p>)

	let form = (
		<div className="form-container">
			<form className="form" onSubmit={handleSubmit}  >
				<label htmlFor='Form'>Let's Discuss!</label>
				<textarea
					className="name"
					type='text'
					id='name'
					value={name}
					placeholder="Your name..."
					onChange={e => setName(e.target.value)}
				/>
				<textarea
					className="comments"
					type='text'
					id='id'
					value={comment}
					placeholder="Share your thoughts..."
					onChange={e => setComment(e.target.value)}
				/>

				<button className="card_button" type="submit">Submit</button>
			
				
				{/* And the error state */}
				{
					error.length > 0
						? error.map((error, index) => (
						<p key={index} style={{ color: "red" }}>
							{error}
						</p>
						))
						: null
				}
			</form> 
			
		</div>

	)

	return (
		<div className="discussion">
			{form}
			<div className="comments-container">
				<h3>Comments</h3>
				{itemsToDisplay}
			</div>		
		</div>	
	)
}

export default Discussions