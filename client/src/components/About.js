import React, { Component } from 'react'
import Sec_nav from './Sec_nav'
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



 class About extends Component {
  render() {
    return (
      <div>
        <Sec_nav />
        <div style={{padding: '20px'}}>
          <h1 style={{fontWeight: '800',textAlign: 'center',color: '#47BBFF'}}>Features</h1>
          <h3 style={{color: '#404040',textAlign: 'center'}}>Comprehensive, yet Simple</h3>
        </div>
        <Container>
          <h3 style={{marginTop: '30px'}}>SmartSchool For School</h3>
          <p>Eliminate stress from teaching with our comprehensive but simple modules. Easily manage everything from class schedule, students attendance, assessments, and grading. Teaching has never been this stress-free!</p>
          <Row style={{marginTop: '50px'}}>
            <Col sm={6}>
                <Card style={{marginTop:'20px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">Attendance Management</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col sm={6}>
            <Card style={{marginTop:'20px',    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.01)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">Report Cards</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
                <Card style={{marginTop:'20px',boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">School Inventory Sales</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col sm={6}>
            <Card style={{marginTop:'20px',boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">Finance Management</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          </Row>

          <h3 style={{marginTop: '60px'}}>SmartSchool For students/Parents</h3>
          <p>Eliminate stress from teaching with our comprehensive but simple modules. Easily manage everything from class schedule, students attendance, assessments, and grading. Teaching has never been this stress-free!</p>
          <Row style={{marginTop: '50px'}}>
            <Col sm={6}>
                <Card style={{marginTop:'20px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">Result Tracking</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col sm={6}>
            <Card style={{marginTop:'20px',    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">Fees Payment</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          </Row>

          <Row>
            <Col sm={6}>
                <Card style={{marginTop:'20px',boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">Libary Management System</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col sm={6}>
            <Card style={{marginTop:'20px',boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',width: '100%' }}>
                  <Card.Body>
                    <Card.Title className="card_title">Purchase of School Inventory</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          </Row>

 
        </Container>

        <div style={{marginTop: '100px',background: '	#F0F0F0',height: '100px'}}></div>

      </div>
    )
  }
}

export default About
