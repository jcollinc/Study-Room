import React, { useEffect, useState } from 'react'
import Card from './Card'


function DataCards() {

	const [coffees, setCoffees] = useState([])
	const [fName, setFname] = useState('')
	const [error, setError] = useState('')
	const [name, setName] = useState(null)
	
	let coffeeOrder = []

	// Keeping these just in case.
	// const [title, setTitle] = useState('');
	// const [description, setDescription] = useState('');
	// const [image, setImage] = useState('');

	useEffect(() => {
		fetch('http://localhost:3000/coffees')
		.then(res => res.json())
		.then(coffees => {
			console.log('hi from DataCards', coffees)
			setCoffees(coffees)
		})
	}, [])

	let itemsToDisplay = coffees
		.map(coffee => {
			return (
				<Card 
					coffee={coffee} 
					key={coffee.id} 
					id={coffee.id}
					name={name} 
					handleClaim={handleClaim}
				/>
			)		
		}
	)

	function handleDropdownChange (e) {
		e.target.value.length > 0 ? setName(e.target.value) : setName(null)
		coffeeOrder = []
		console.log(coffeeOrder)
	}

	function handleClaim (e) {
		if (e.target.innerText === "Claim") {
			e.target.innerText = "Claimed!"
			e.target.className = "button-claimed"
		}
		else {e.target.innerText = "Claim"
			  e.target.className = "card_button"}
		coffees.map(coffee => {
			if (coffee.id.toString() === e.target.id && !coffeeOrder.includes(coffee.title)) {
				coffeeOrder.push(coffee.title)
				console.log(coffeeOrder)
			}
		})
	}

  return (
    <div>
      <div className="dropdown-div">
		<p>{name ? `Hello ${name}, what would you like to order?` : "Welcome to the study room!"}</p>
	  	<select onChange={handleDropdownChange} className="dropdown">
			<option value="">Please select name:</option>
			<option value="Chun">Chun</option>
			<option value="Jon">Jon</option>
			<option value="Daniel">Daniel</option>
			<option value="Aaron">Aaron</option>
		</select>
      </div>
      <div className="cards">
        {itemsToDisplay}
      </div>
    </div>
  )
}

export default DataCards