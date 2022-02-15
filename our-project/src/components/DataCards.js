import React, { useEffect, useState } from 'react'
import Card from './Card'

function DataCards() {

  const [coffees, setCoffees] = useState([])

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
        <Card coffee={coffee} key={coffee.id} />
      )
    }
  )

  return (
    <div>
      {itemsToDisplay}
    </div>
  )
}

export default DataCards