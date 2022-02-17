import React, { useEffect, useState } from 'react'

function Interact() {

	const [cohorts, setCohorts] = useState([])

	useEffect(() => {
		fetch('http://localhost:3000/cohorts')
		.then(res => res.json())
		.then(cohorts => {
			setCohorts(cohorts)
		})
	}, [])

	let itemsToDisplay = cohorts
		.map(cohort => {
			let orderMessage
			let noOrderMessage
			
			if (cohort.order) {orderMessage = cohort.fName + " ordered: " + cohort.order.join(', ') + [cohort.order.length > 3 ? " ᕙ(⊙‸⊙)ᕗ" : " ᕙ(o‸o)ᕗ"]; noOrderMessage = null}
			else {orderMessage = null; noOrderMessage = cohort.fName + " hasn't ordered yet (ￗ﹏ￗ )"}

			return (
				<li key={cohort.fName} className="cards">
					<div className="cards_item">
						<ul>
							<img 
								className="cohort_image" src={cohort.image} 
							/>
							{cohort.order ? orderMessage : noOrderMessage}
						</ul>
					</div>
				</li>	
			)
		})

	return (
		<div>
			{itemsToDisplay}
		</div>
	)
}

export default Interact