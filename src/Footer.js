import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

function Footer() {
  return <div style={{backgroundColor: "#747474", padding:'50px 100px'}}> 
    <Row style={{textAlign:'center'}}>
      <Col lg={4}>
        <span className="footer-heading">About</span>
        <div className="footer-sub-heading">Company</div>
        <div className="footer-sub-heading">Contact</div>
      </Col>
      <Col lg={4}>
        <span className="footer-heading">Resources</span>
        <div className="footer-sub-heading">Engineering Insights</div>
        <div className="footer-sub-heading">How It Works</div> 
        <div className="footer-sub-heading">FAQ</div>
      </Col>
      <Col lg={4}>
        <span className="footer-heading">Legal</span>
        <div className="footer-sub-heading">Privacy  Policy</div>
        <div className="footer-sub-heading">Terms and Conmditions</div>
      </Col>
    </Row>
    <div style={{textAlign: 'center',
    color:'#fbfcfc', margin: '35px 0px'}}>Copyright  2020 by ProHire. All Rights Reserved.</div>
  </div>
  }

export default Footer;
