import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
        <Nav />  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
