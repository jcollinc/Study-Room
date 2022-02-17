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

	function handleImgClick (e) {
		let randomNum = Math.floor(Math.random() * 1084);
		let newSrc=`https://picsum.photos/id/${randomNum}/200/300`
		e.target.src=newSrc
		
	}

	let itemsToDisplay = cohorts
		.map(cohort => {
			let orderMessage
			let noOrderMessage
			
			if (cohort.order) {orderMessage = cohort.fName + "'s order: " + cohort.order.join(', ') + [cohort.order.length > 3 ? " ᕙ(⊙‸⊙)ᕗ" : " ᕙ(o‸o)ᕗ"]; noOrderMessage = null}
			else {orderMessage = null; noOrderMessage = cohort.fName + " hasn't ordered yet (ￗ﹏ￗ )"}

			return (
				<div key={cohort.fName} className="cohort-card">
					<li className="cards">
						<div className="cards_item">
							<div className="image-div">
								<img 
									onClick={handleImgClick}
									className="cohort_image" 
									src={cohort.image} 
								/>
								<p>{cohort.order ? orderMessage : noOrderMessage}</p>
							</div>
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