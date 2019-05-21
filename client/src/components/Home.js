import React, { Component } from 'react'
import '../App.css'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import Sec_nav from './Sec_nav'


export class Home extends Component {
  render() {
    return (
      <React.Fragment>
             <Sec_nav />
              <Container>
                    <Row className="index_row1">
                      <Col sm={4}><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, laborum.</p>
                      </Col>
                      <Col sm={8}><Image className="index_image" src="https://blog.blackboard.com/wp-content/uploads/GettyImages-587551464_super.png" fluid /><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore magna aliqua. ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  <Button style={{with: '100%', marginLeft: '30%', maxWidth: '40%', marginRight: '30%'}} variant="primary" size="lg">
                        Get Started
                      </Button></Col>
                    </Row>
            
              <hr />
            </Container>

      </React.Fragment>
    )
  }
}

export default Home
