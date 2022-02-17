import React, { useEffect, useState } from 'react'

function Orders() {

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
				<div key={cohort.fName} className="cohort-card">
					<li className="cards">
						<div className="cards_item">
							<div className="image-div">
								<img 
									className="cohort_image" src={cohort.image} 
								/>
							</div>
							<p>{cohort.order ? orderMessage : noOrderMessage}</p>
						</div>
					</li>	
				</div>
			)
		})

	return (
		<div className="cohort-container">
			{itemsToDisplay}
		</div>
	)
}

export default Orders