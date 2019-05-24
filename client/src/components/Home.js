import React, { Component } from 'react'
import '../App.css'
import About from './About'
import { Row } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import Sec_nav from './Sec_nav'


export class Home extends Component {
  render() {
    return (
    <React.Fragment>
             <Sec_nav />
             <Carousel className="carousel">
  <Carousel.Item className="item">
    <img
      className="d-block w-100 "
      src="https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/d7_images/cover_media/petty-169hero-classroomtools-shutterstock.jpg"
      alt="First slide"
    />
    
    <Carousel.Caption>
   <Link to="/about"><Button variant="primary" size="lg">
     Expore Features
    </Button>
    </Link>
 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item">
    <img
      className="d-block w-100"
      src="https://www.free3dasset.com/wp-content/uploads/2019/04/13.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <Button variant="primary" size="lg">
     Expore Features
    </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="item">
    <img
      className="d-block w-100"
      src="https://cdn2.alphr.com/sites/alphr/files/2018/02/family_parents_children_laptop_tablet.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    <Button variant="primary" size="lg">
     Expore Features
    </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="home_section">
      <h3 style={{textAlign:'center'}}>The Smart Scool: The Finest Scool Management Software</h3>
      <hr style={{width: '100%', maxWidth: '50%'}}></hr>
      <p style={{textAlign: 'center'}}>Digitizing scholastic institutions to survive in this Internet era with a myriad of<br />
benefits to excel in academics as well as management.</p>
</div>
              
      </React.Fragment>
    )
  }
}

export default Home
