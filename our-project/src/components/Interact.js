import React, { useEffect, useState } from 'react'

function Interact() {

	const [cohorts, setCohorts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/cohorts')
		.then(res => res.json())
		.then(cohorts => {
			console.log('hi from interact', cohorts)
			setCohorts(cohorts)
		})
	}, [])

	let itemsToDisplay = cohorts
		.map(cohort => {
			return (
				<ul key={cohort.fName}>
					<img className="cohort_image" src={cohort.image} />
					{cohort.fName} | {cohort.title}
				</ul>
				
			)
		})


	return (
		<div>
			{itemsToDisplay}
			
		</div>
	)
}

export default Interact