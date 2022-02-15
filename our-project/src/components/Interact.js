import React, { useState } from 'react'

function Interact({ handleAddItem }) {
	const [fName, setFname] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [error, setError] = useState('')
	
	function handleSubmit(e) {
		e.preventDefault();

		//TODO: additional inputs: Extra shots, etc.
		const formData = { fName, title, description, image }
		
		{/* Controlled form input validation! */}
		if (title.length > 0 && description.length > 0 && image.length > 0) {
			setError([])

			fetch("http://localhost:3000/coffees", {
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
			setError(["All inputs are required!"])
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor='fName'>First Name::</label>
			<input
				type='text'
				id='fName'
				value={fName}
				onChange={e => setFname(e.target.value)}
			/>
			<label htmlFor='title'>Title:</label>
			<input
				type='text'
				id='title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<label htmlFor='description'>Description:</label>
			<input
				type='text'
				id='description'
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<label htmlFor='image'>Image:</label>
			<input
				type='text'
				id='image'
				value={image}
				onChange={e => setImage(e.target.value)}
			/>
			<button type="submit">Add Item</button>
			
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
	)
}

export default Interact