import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Row style={{ backgroundColor: "#747474", padding: 50, height: "600px" }}>
        <Col>
          <h1
            style={{
              fontWeight: "lighter",
              fontSize: 40,
              color: "#FBFCFC",
              borderBottom: "2px solid #FBFCFC",
              width: "30%",
              fontFamily: "Work Sans",
              textAlign: "center",
              marginLeft: "65px",
              paddingBottom: "10px",
            }}
          >
            About
          </h1>
          <Row>
            <Col style={{ padding: 50, paddingTop: 200 }}>
              <ul
                style={{
                  textAlign: "center",
                  float: "left",
                  marginTop: -170,
                  marginLeft: 10,
                }}
              >
                <li
                  style={{
                    listStyleType: "none",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                    fontFamily: "Work Sans",
                    fontSize: 22,
                  }}
                >
                  Company
                </li>
                <li
                  style={{
                    marginTop: "10px",
                    listStyleType: "none",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                    fontFamily: "Work Sans",
                    fontSize: 22,
                  }}
                >
                  Contact
                </li>
              </ul>
            </Col>
            <Col style={{ padding: 50, paddingTop: 200 }}></Col>
            <Col style={{ padding: 50, paddingTop: 200 }}></Col>
          </Row>
        </Col>
        <Col>
          <h1
            style={{
              fontWeight: "lighter",
              fontSize: 40,
              color: "#FBFCFC",
              borderBottom: "2px solid #FBFCFC",
              width: "45%",
              fontFamily: "Work Sans",
              textAlign: "center",
              marginLeft: "65px",
              paddingBottom: "10px",
            }}
          >
            Resources
          </h1>
          <Row>
            <Col style={{ padding: 50, paddingTop: 200 }}>
              <ul
                style={{
                  textAlign: "center",
                  float: "left",
                  marginTop: -170,
                  marginLeft: 40,
                  width: "190%",
                  marginLeft: -18,
                }}
              >
                <li
                  style={{
                    listStyleType: "none",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                    fontFamily: "Work Sans",
                    fontSize: 22,
                  }}
                >
                  Engineering Insights
                </li>
                <li
                  style={{
                    marginTop: "10px",
                    listStyleType: "none",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                    fontFamily: "Work Sans",
                    fontSize: 22,
                  }}
                >
                  How It Works
                </li>
                <li
                  style={{
                    marginTop: "10px",
                    listStyleType: "none",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                    fontFamily: "Work Sans",
                    fontSize: 22,
                  }}
                >
                  FAQ
                </li>
              </ul>
            </Col>
            <Col></Col>
            <Col style={{ padding: 10, paddingTop: 200 }}></Col>
          </Row>
        </Col>
        <Col>
          <h1
            style={{
              fontWeight: "lighter",
              fontSize: 40,
              color: "#FBFCFC",
              borderBottom: "2px solid #FBFCFC",
              width: "30%",
              fontFamily: "Work Sans",
              textAlign: "center",
              marginLeft: "65px",
              paddingBottom: "10px",
            }}
          >
            Legal
          </h1>
          <Row>
            <Col style={{ padding: 50, paddingTop: 200 }}>
              <ul
                style={{
                  textAlign: "center",
                  float: "left",
                  marginTop: -170,
                  marginLeft: 10,
                  width: 300,
                  marginLeft: -68,
                }}
              >
                <li
                  style={{
                    listStyleType: "none",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                    fontFamily: "Work Sans",
                    fontSize: 22,
                  }}
                >
                  Privacy Policy
                </li>
                <li
                  style={{
                    marginTop: "10px",
                    listStyleType: "none",
                    fontWeight: "lighter",
                    color: "#C4C4C4",
                    fontFamily: "Work Sans",
                    fontSize: 22,
                  }}
                >
                  Terms and Conditions
                </li>
              </ul>
            </Col>
            <Col style={{ padding: 50, paddingTop: 200 }}></Col>
            <Col
              style={{ padding: 50, paddingTop: 200, paddingBottom: 0 }}
            ></Col>
          </Row>
        </Col>
        <span></span>
        <h3
          style={{
            color: "#C4C4C4",
            transform: "translate(10px,350px)",
            fontWeight: "lighter",
            marginBottom: 200,
            position: "absolute",
            marginLeft: "70px",
            width: "100%",
          }}
        >
          Copyright 2020 by ProHire. All Rights Reserved.
          <svg
            width="1335"
            height="1"
            viewBox="0 0 1335 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="1335" y2="0.5" stroke="#FBFCFC" />
          </svg>
        </h3>
      </Row>
    </div>
  );
}

export default Footer;
