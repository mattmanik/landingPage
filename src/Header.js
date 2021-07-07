import React from 'react';
import {Container,Row,Col,Button,Navbar,Nav,NavDropdown }from 'react-bootstrap';

function Header() {
    return (
      <Navbar style={{backgroundColor:'#071425', height: '75px'}}  variant="dark" >
  <Container>
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text style={{color:'#FBFCFC',paddingRight:31,}}>
       <a href="#Home" style={{textDecoration:'none'}}>Home</a>
      </Navbar.Text>
      <Navbar.Text style={{color:'#FBFCFC',paddingRight:31}}>
       <a href="#HowItWorks" style={{textDecoration:'none'}}>How It Works</a>
      </Navbar.Text>
      <Navbar.Text style={{color:'#FBFCFC',paddingRight:31}} >
       <a href="#FAQ"  style={{textDecoration:'none'}}>FAQ</a>
      </Navbar.Text>
      <Navbar.Text style={{color:'#FBFCFC'}}>
       <a href="#Contact"  style={{textDecoration:'none'}}>Contact</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
};

export default Header;