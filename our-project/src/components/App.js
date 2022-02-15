import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from "./Home"
import NavBar from "./NavBar"
import Card from './Card'
import DataCards from "./DataCards"
import Interact from "./Interact"


function App() {


  const [coffees, setCoffees] = useState([])

  // Create a new array, add the new item, then sets the coffees obj
  function handleAddItem(newItem) {
    const updatedCards = [newItem, ...coffees]
    setCoffees(updatedCards)
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/coffee">
          <DataCards />
        </Route>
        <Route path="/interact">
          <Interact handleAddItem={handleAddItem} />
        </Route>
        
      </Switch>
    </div>  
  );
}

export default App;
