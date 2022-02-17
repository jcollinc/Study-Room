import React, { useState } from 'react'

function Discussions({ handleAddItem }) {

	const [comment, setComment] = useState('')
	const [error, setError] = useState('')

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

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<label htmlFor='Form'>Let's Discuss!</label>
				<input
				type='text'
				id='fName'
				value={comment}
				placeholder="Share your thoughts..."
				onChange={e => setComment(e.target.value)}
				/>		
				<button type="submit">Submit</button>
				
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
}

export default Discussions