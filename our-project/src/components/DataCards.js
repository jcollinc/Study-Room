import React, { useEffect, useState } from 'react'
import Card from './Card'


function DataCards() {

	const [coffees, setCoffees] = useState([])
	const [name, setName] = useState(null)
	const [coffeeOrder, setCoffeeOrder] = useState([])

	let newOrder;

	useEffect(() => {
		fetch('http://localhost:3000/coffees')
		.then(res => res.json())
		.then(coffees => {
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
		// TODO setName indicates id number NOT name!
		e.target.value.length > 0 ? setName(e.target.value) : setName(null)
		setCoffeeOrder([])
		newOrder = {}
		console.log(coffeeOrder)
		console.log(e.target)
		
	}

	function handleClaim (e) {
		if (e.target.innerText === "Order") {
			e.target.innerText = "Ordered!"
			e.target.className = "button-claimed"
		}
		else {e.target.innerText = "Order"
			  e.target.className = "card_button"}
		coffees.map(coffee => {
			if (coffee.title === e.target.id && !coffeeOrder.includes(coffee.title)) {
				setCoffeeOrder(coffeeOrder => [...coffeeOrder, coffee.title])
				console.log(coffeeOrder)
			}
			else if (coffee.title === e.target.id && coffeeOrder.includes(coffee.title)) {
				setCoffeeOrder(coffeeOrder => coffeeOrder.filter(coffee => coffee!== e.target.id))
				console.log(coffeeOrder)
			}
		})
	}

	function handleSubmit () {
		newOrder = {order : coffeeOrder}
		console.log(newOrder)
		fetch (`http://localhost:3000/cohorts/${name}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json", 
				"Accept": "application/json"},
			body: JSON.stringify(newOrder)
      })
				.then(r => r.json())
				.then(data => console.log(data))
  	}
	

  return (
    <div>
      <div className="dropdown-div">
		<p>{name ? `Hello name, what would you like to order?` : "Welcome to the study room!"}</p>
	  	<select onChange={handleDropdownChange} className="dropdown">
			<option id="0" value="">Please select name:</option>
			<option id="1" value="1">Tyler</option>
			<option id="2" value="2">Aaron</option>
			<option id="3" value="3">Chun</option>
			<option id="4" value="4">Daniel</option>
			<option id="5" value="5">Ethan</option>
			<option id="6" value="6">Felipa</option>
			<option id="7" value="7">Hamzah</option>
			<option id="8" value="8">Jon</option>
			<option id="9" value="9">Matt</option>
			<option id="10" value="10">Mohammed</option>
			<option id="11" value="11">Vanessa</option>
			<option id="12" value="12">Yeohoon</option>
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