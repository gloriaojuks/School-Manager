import React, { Component } from 'react'
import {Link} from 'react-router-dom'  
import { Image } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

        
        class Sec_nav extends Component {
            render() {
              return (  <div style={{paddingBottom: '100px'}}className="nav_2">
  <Navbar.Brand  href="#home"><Image style={{marginBottom:'-25px',marginTop:'-32px'}} width="80" src="https://www.codester.com/static/uploads/items/8870/icon.png"/></Navbar.Brand>
              
                        <h3>the Smart <span className="nav_2_span">School</span></h3>
                        </div>
                        )
            }
          }

          export default Sec_nav