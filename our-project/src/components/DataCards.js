import React, { useEffect, useState } from 'react'
import Card from './Card'
import Interact from './Interact'

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

  // Create a new array, add the new item, then sets the coffees obj
  function handleAddItem(newItem) {
    const updatedCards = [newItem, ...coffees]
    setCoffees(updatedCards)
  }

  return (
    <div>
      {itemsToDisplay}
      <Interact handleAddItem={handleAddItem} />
    </div>
  )
}

export default DataCards