import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import Discussions from "./Discussions"
import NavBar from "./NavBar"
import Card from './Card'
import StudyRoom from "./StudyRoom"
import Orders from "./Orders"
import Footer from "./Footer"

function App() {

  const [coffees, setCoffees] = useState([])

  // Create a new array, add the new item, then sets the coffees obj
  function handleAddItem(newItem) {
    const updatedCards = [newItem, ...coffees]
    setCoffees(updatedCards)
  }

  return (
    <div className="page-container">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <StudyRoom />
        </Route>
        <Route exact path="/study-room">
          <StudyRoom />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/discussions">
          <Discussions handleAddItem={handleAddItem} />
        </Route>
      </Switch>
      <Footer />
    </div>  
  );
}

export default App;
