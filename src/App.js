import React from 'react';
import Container from "./Container"
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import About from "./components/About"
import './App.css'


function App() {
  return (
    <div>
      <header>
   
   <Switch>
             
<Link to="/">Home</Link><div></div>
<Link to="/About">About me</Link> 

<Route component = {Container} exact path="/" />
<Route component = {About} path="/About" />
      
  </Switch>
       
      </header>
    </div>
  );
}

export default App;
