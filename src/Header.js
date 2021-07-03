import React from 'react';
import {Container,Row,Col,Button,Navbar,Nav,NavDropdown }from 'react-bootstrap';

function Header() {
    return (
      <Navbar style={{backgroundColor:'#071425'}}  variant="dark" >
  <Container>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text style={{color:'#FBFCFC',paddingRight:31}}>
       <a href="#Home">Home</a>
      </Navbar.Text>
      <Navbar.Text style={{color:'#FBFCFC',paddingRight:31}}>
       <a href="#HowItWorks">How It Works</a>
      </Navbar.Text>
      <Navbar.Text style={{color:'#FBFCFC',paddingRight:31}} >
       <a href="#FAQ">FAQ</a>
      </Navbar.Text>
      <Navbar.Text style={{color:'#FBFCFC'}}>
       <a href="#Contact">Contact</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
};

export default Header;