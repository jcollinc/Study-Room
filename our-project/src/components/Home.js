import React, { useState } from 'react'

function Home({ handleAddItem }) {

	const [comment, setComment] = useState('')
	const [error, setError] = useState('')

    function handleSubmit(e) {
      e.preventDefault();
  
      //TODO: additional inputs: Extra shots, etc.
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
		<div>
		<form onSubmit={handleSubmit}>
			<label htmlFor=''>Add a suggestion:</label>
			<input
			type='text'
			id='fName'
			value={comment}
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

export default Home 