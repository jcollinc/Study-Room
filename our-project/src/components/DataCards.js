import React, { useEffect, useState } from 'react'
import Card from './Card'


function DataCards() {

	const [coffees, setCoffees] = useState([])
	const [id, setId] = useState(null)
	const [coffeeOrder, setCoffeeOrder] = useState([])
	const [name, setName] = useState(null)

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
					id={id} 
					handleClaim={handleClaim}
				/>
			)		
		}
	)


	function handleDropdownChange (e) {
		e.target.value.length > 0 ? setId(e.target.value) : setId(null)
		setName(e.target.options[e.target.selectedIndex].text)
		setCoffeeOrder([])
		newOrder = {}
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
				setCoffeeOrder(coffeeOrder => [...coffeeOrder , coffee.title])
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
		fetch (`http://localhost:3000/cohorts/${id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json", 
				"Accept": "application/json"},
			body: JSON.stringify(newOrder)
      })
				.then(r => r.json())
				.then(() => {setCoffeeOrder([])})
  	}
	

  return (
    <div>
      <div className="dropdown-div">
		<p className={name ? "hello" : "welcome"}>
			{id ? `Hello ${name}, what would you like to order?` : "Welcome to the study room!"}
		</p>
	  	<select onChange={handleDropdownChange} className="dropdown">
			<option name="Jon" value="">Please select name:</option>
			<option name="Jon" value="1">Tyler</option>
			<option name="Jon" value="2">Aaron</option>
			<option name="Jon" value="3">Chun</option>
			<option name="Jon" value="4">Daniel</option>
			<option name="Jon" value="5">Ethan</option>
			<option name="Jon" value="6">Felipa</option>
			<option name="Jon" value="7">Hamzah</option>
			<option name="Jon" value="8">Jon</option>
			<option name="Jon" value="9">Matt</option>
			<option name="Jon" value="10">Mohammed</option>
			<option name="Jon" value="11">Vanessa</option>
			<option name="Jon" value="12">Yeohoon</option>
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