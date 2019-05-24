import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Second_nav from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Form from './components/Student_form'
import Forms from './components/Admin_Form'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <React.Fragment>
        <NavBar />  
        <Switch>
          <Route exact path="/" component={Second_nav} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/form" component={Form} />
          <Route path="/forms" component={Forms} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
