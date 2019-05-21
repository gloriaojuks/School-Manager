import React, { Component } from 'react'
import {Link} from 'react-router-dom' 
import '../App.css'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import Sec_nav from './Sec_nav' 
        
        class Contact extends Component {
            render() {
              return ( 
                <React.Fragment>
                <Sec_nav />
                <Container style={{padding: '80px'}}>
                       <Row className="">
                         <Col style={{background:'',opacity: '0.9'}} sm={4}>
                         <Row style={{padding: '30px'}}>
                            <Col xs={6}><h3>Contact</h3><br />31 Aggrey Road<br />Opposite British Accamemy</Col>
                            <Col xs={6}><h3>Socials</h3> <br />
                            <img src="https://img.icons8.com/color/36/000000/facebook-new.png" />
                            <br />
                            <img src="https://img.icons8.com/color/36/000000/twitter.png" />
                             <br />
                             <img src="https://img.icons8.com/ultraviolet/36/000000/instagram-new.png" />
                             </Col>
                             <h2 style={{paddingTop: '20px'}}>Give us a call on:</h2>
                             <p>+865 675 897</p><br />
                             
                            
                        </Row>
                         </Col>
                         <Col sm={8}>
                         <Form>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" />
                            </Form.Group> <Form.Group controlId="formGroupEmail">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" />
                            </Form.Group>
                            <Form.Group controlId="formGroupEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="enter Password" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Leave a Message</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            </Form>
                          </Col>
                       </Row>
                       </Container>
               
                 <hr />
               
   
         </React.Fragment>
                  )
            }
          }

          export default Contact