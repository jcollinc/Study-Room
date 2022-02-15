import React, { useEffect, useState } from 'react'

function Interact() {

	const [cohorts, setCohorts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/cohorts')
		.then(res => res.json())
		.then(cohorts => {
			//console.log('hi from interact', cohorts)
			setCohorts(cohorts)
		})
	}, [])

	let itemsToDisplay = cohorts
		.map(cohort => {
			return (
				<li key={cohort.fName} className="cards">
					
					<div className="cards_item">
						<ul>
							<img className="cohort_image" src={cohort.image} />
							{cohort.fName} | {cohort.title} ordered a
						</ul>

					</div>


				</li>	
			)
		})

		
	let today = new Date().getDate()
	console.log(today)

	return (
		<div>
			<h1>#east-se-011022-c</h1>
			<h3>Today is: {today}</h3>
			{itemsToDisplay}

		</div>
	)
}

export default Interact