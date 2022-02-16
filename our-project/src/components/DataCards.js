import React, { useEffect, useState } from 'react'
import Card from './Card'


function DataCards() {

	const [coffees, setCoffees] = useState([])
	const [name, setName] = useState(null)
	const [coffeeOrder, setCoffeeOrder] = useState([])

	let newOrder;

	// Keeping these just in case.
	// const [title, setTitle] = useState('');
	// const [description, setDescription] = useState('');
	// const [image, setImage] = useState('');
	// const [fName, setFname] = useState('')
	// const [error, setError] = useState('')

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
					coffeeOrder={coffeeOrder}
					name={name} 
					handleClaim={handleClaim}
				/>
			)		
		}
	)


	function handleDropdownChange (e) {
		e.target.value.length > 0 ? setName(e.target.value) : setName(null)
		setCoffeeOrder([])
		newOrder = {}
		console.log(coffeeOrder)
	}

	function handleClaim (e) {
		if (e.target.innerText === "Order") {
			e.target.innerText = "Ordered!"
			e.target.className = "button-claimed"
		}
		else {e.target.innerText = "Order"
			  e.target.className = "card_button"}
		coffees.map(coffee => {
			if (coffee.title.toString() === e.target.id && !coffeeOrder.includes(coffee.title)) {
				setCoffeeOrder(coffeeOrder => [...coffeeOrder, coffee.title])
				console.log(coffeeOrder)
			}
			else if (coffee.title.toString() === e.target.id && coffeeOrder.includes(coffee.title)) {
				setCoffeeOrder(coffeeOrder => coffeeOrder.filter(coffee => coffee!== e.target.id))
			}
		})
	}

	function handleSubmit (e) {
		newOrder = {[name] : coffeeOrder}
		console.log(newOrder)
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
	  <div className="submit-div">
	  	{coffeeOrder.length === 0 ? null : <button onClick={handleSubmit} className="card_button">Submit Order</button>}
	  </div>
    </div>
  )
}

export default DataCards