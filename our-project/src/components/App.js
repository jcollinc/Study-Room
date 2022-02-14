import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./Home"
import NavBar from "./NavBar"
import DataCards from "./DataCards"
import Interact from "./Interact"

function App() {
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
          <Interact />
        </Route>
      </Switch>
    </div>  
  );
}

export default App;
