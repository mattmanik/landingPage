import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Title
} from "react-bootstrap";
import "./Content.css";
import paper from "./assets/paper.svg";
import bid from "./assets/bid.svg";
import approval from "./assets/approval.svg";
import location from "./assets/location.svg";
import hand from "./assets/handshake.svg";
import { GiReceiveMoney } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";

function Content() {
  return (
    <Container style={{ paddingTop: 50 }}>
      <Row>
        <Col style={{ padding: 50, paddingBottom: 5 }}>
          <p
            style={{
              fontFamily: "Taviraj",
              color: "#071425",
              fontWeight: "bold",
              fontSize: 35,
            }}
          >
            Find a Professional Engineer <br></br>
            For Your next project!
          </p>
        </Col>
        <Col md="auto" style={{ padding: 50 }}></Col>
        <Col xs lg="2" style={{ padding: 50 }}></Col>
      </Row>

      <Row>
        <Col style={{ padding: 50, paddingTop: 10, paddingBottom: 5 }}>
          <p
            style={{ fontFamily: "Work Sans", color: "#636363", fontSize: 20 }}
          >
            We provide a platform that connect companies <br></br>
            and Professional Engineers in one portal
          </p>
        </Col>
        <Col md="auto" style={{ padding: 50 }}></Col>
        <Col xs lg="2" style={{ padding: 50 }}></Col>
      </Row>

      <Row>
        <Col lg={6} style={{ padding: 50, paddingTop: 10 }}>
          <Row>
            <Col style={{ padding: 5, paddingTop: 10, width: "100%" }}>
              <Button size="lg" className="btnClass1">
                Post a Project
              </Button>
            </Col>
            <Col style={{ padding: 5, paddingTop: 10 }}>
              <Button size="lg" className="btnClass2">
                Find a Project
              </Button>
            </Col>
          </Row>
        </Col>
        <Col style={{ padding: 50 }}></Col>
        <Col style={{ padding: 50 }}></Col>
      </Row>

      <Row style={{ paddingBottom: 30 }}>
        <Col style={{ paddingTop: 15, backgroundColor: "#071425" }}>
          <p style={{ color: "#FBFCFC", textAlign: "center", fontSize: 30 }}>
            1 Million +
          </p>
          <p
            style={{
              color: "#B9B9B9",
              textAlign: "center",
              fontSize: 20,
              marginTop: -15,
            }}
          >
            Projects
          </p>
        </Col>
        <Col style={{ paddingTop: 15, backgroundColor: "#071425" }}>
          <p style={{ color: "#FBFCFC", textAlign: "center", fontSize: 30 }}>
            50,000 +
          </p>
          <p
            style={{
              color: "#B9B9B9",
              textAlign: "center",
              fontSize: 20,
              marginTop: -15,
            }}
          >
            Professional Engineers
          </p>
        </Col>
        <Col style={{ paddingTop: 15, backgroundColor: "#071425" }}>
          <p style={{ color: "#FBFCFC", textAlign: "center", fontSize: 30 }}>
            10 Million +
          </p>
          <p
            style={{
              color: "#B9B9B9",
              textAlign: "center",
              fontSize: 20,
              marginTop: -15,
            }}
          >
            Payment Send
          </p>
        </Col>
        <Col style={{ paddingTop: 15, backgroundColor: "#071425" }}>
          <p style={{ color: "#FBFCFC", textAlign: "center", fontSize: 30 }}>
            4.7 Ratings +
          </p>
          <p
            style={{
              color: "#B9B9B9",
              textAlign: "center",
              fontSize: 20,
              marginTop: -15,
            }}
          >
            Reviews by the users
          </p>
        </Col>
      </Row>

      <Row>
        <Col style={{ paddingTop: 30, backgroundColor: "white" }}>
          <p
            style={{
              color: "#071425",
              textAlign: "center",
              fontSize: 30,
              fontFamily: "Taviraj",
              fontWeight: "bold",
            }}
          >
            How It Works ?{" "}
          </p>
          <p
            style={{
              fontFamily: "Work Sans",
              color: "#636363",
              textAlign: "center",
              fontSize: 20,
              marginTop: -15,
            }}
          >
            for company{" "}
          </p>
        </Col>
      </Row>

      <Row style={{ paddingBottom: 30 }}>
        <Col style={{ padding: 50 }}>
          <img
            style={{
              width: "100%",
              padding: "10%",
              borderRadius: '15%',
              marginTop: -35,
              textAlign: "center",
            }}
            alt="handshake"
            src="https://therainmakercompanies.com/wp-content/uploads/2019/02/Shaking-Hands-Meeting-Resized-for-Blog.jpg"
          />
        </Col>

        <Col>
          <Row style={{ padding: 30, paddingBottom: 0 }}>
            <Col>
              <img
                style={{ float: "left", width: "12%" }}
                src={paper}
                alt="paper"
              />

              <p
                style={{
                  color: "#636363",
                  textAlign: "left",
                  fontSize: 20,
                  fontFamily: "Taviraj",
                  fontWeight: "normal",
                  marginLeft: 80,
                }}
              >
                Post a project to tell us about{" "}
              </p>
              <p
                style={{
                  color: "#636363",
                  textAlign: "left",
                  marginLeft: 80,
                  fontSize: 20,
                  fontFamily: "Taviraj",
                  fontWeight: "normal",
                  marginTop: -15,
                }}
              >
                your project
              </p>
            </Col>
          </Row>
          <Row style={{ padding: 30, paddingBottom: 0 }}>
            <Col>
              <img
                style={{ float: "left", width: "12%" }}
                src={bid}
                alt="paper"
              />

              <p
                style={{
                  color: "#636363",
                  textAlign: "left",
                  fontSize: 20,
                  fontFamily: "Taviraj",
                  fontWeight: "normal",
                  marginLeft: 80,
                }}
              >
                Select a professional Engineer
              </p>
              <p
                style={{
                  color: "#636363",
                  textAlign: "left",
                  marginLeft: 80,
                  fontSize: 20,
                  fontFamily: "Taviraj",
                  fontWeight: "normal",
                  marginTop: -15,
                }}
              >
                based on bids received
              </p>
            </Col>
          </Row>
          <Row style={{ padding: 30, paddingBottom: 0 }}>
            <Col>
              <img
                style={{ float: "left", width: "12%", color: "#636363" }}
                src={approval}
                alt="paper"
              />

              <p
                style={{
                  color: "#636363",
                  textAlign: "left",
                  fontSize: 20,
                  fontFamily: "Taviraj",
                  fontWeight: "normal",
                  marginLeft: 80,
                }}
              >
                Get your approval form PE{" "}
              </p>
            </Col>
          </Row>
          <Row style={{ padding: 30 }}>
            <Col>
              <img
                style={{ float: "left", width: "12%" }}
                src={location}
                alt="paper"
              />

              <p
                style={{
                  color: "#636363",
                  textAlign: "left",
                  fontSize: 20,
                  fontFamily: "Taviraj",
                  fontWeight: "normal",
                  marginLeft: 80,
                }}
              >
                Based on your location{" "}
              </p>
              <p
                style={{
                  color: "#636363",
                  textAlign: "left",
                  marginLeft: 80,
                  fontSize: 20,
                  fontFamily: "Taviraj",
                  fontWeight: "normal",
                  marginTop: -15,
                }}
              >
                select the projects{" "}
              </p>
            </Col>
          </Row>

          <Row></Row>
        </Col>
      </Row>

      <Col style={{ paddingTop: 30, backgroundColor: "white" }}>
        <p
          style={{
            color: "#071425",
            textAlign: "center",
            fontSize: 30,
            fontFamily: "Taviraj",
            fontWeight: "bold",
          }}
        >
          Why Choose Us ?{" "}
        </p>
        <p
          style={{
            fontFamily: "Work Sans",
            color: "#636363",
            textAlign: "center",
            fontSize: 20,
            marginTop: -15,
          }}
        >
          Our results based on customers feedback{" "}
        </p>
      </Col>

      <Row style={{ padding: 10 }}>
        <Col style={{ padding: 70, marginRight: -100 }}>
          <Row>
            <Col
              style={{
                marginTop: -30,
                paddingRight: 0,
                maxWidth: "75%",
              }}
            >
              <FaHandshake size="50px" marginTop="-200px" />

              <h1
                style={{
                  color: "#3A3A3A",
                  fontSize: 24,
                  fontFamily: "Taviraj",
                  marginTop: -30,
                  marginLeft: 50,
                  fontWeight: "bold",
                  paddingLeft: 20,
                }}
              >
                Value
              </h1>
              <p style={{ textAlign: "left", width: 300, marginTop: 20 }}>
                We verify our engineers & publish their feedback scores you
                cantrust by reading their profile reviews
              </p>
            </Col>
          </Row>
        </Col>
        <Col style={{ padding: 70, marginRight: -100 }}>
          <Row>
            <Col
              style={{
                marginTop: -30,
                paddingRight: 0,
                maxWidth: "75%",
              }}
            >
              <GiReceiveMoney size="50px" />

              <h1
                style={{
                  color: "#3A3A3A",
                  fontSize: 24,
                  fontFamily: "Taviraj",
                  marginTop: -30,
                  marginLeft: 50,
                  fontWeight: "bold",
                  paddingLeft: 20,
                }}
              >
                Credibility
              </h1>
              <p style={{ textAlign: "left", width: 300, marginTop: 20 }}>
                We have the lowest fees in the industry, providing you with
                maximum value at minimum cost.
              </p>
            </Col>
          </Row>
        </Col>
        <Col style={{ padding: 70 }}>
          <Row>
            <Col
              style={{
                marginTop: -30,
                paddingRight: 0,
                maxWidth: "95%",
              }}
            >
              <RiCustomerServiceFill size="50px" />

              <h1
                style={{
                  color: "#3A3A3A",
                  fontSize: 24,
                  fontFamily: "Taviraj",
                  marginTop: -30,
                  marginLeft: 50,
                  fontWeight: "bold",
                  paddingLeft: 20,
                }}
              >
                24/7 Support
              </h1>
              <p style={{ textAlign: "left", width: 300, marginTop: 20 }}>
                Our dedicated support team works 24/7 to resolve all of your
                queries no matter where you are located.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col style={{ padding: 50 }}>
          <Row>
            <Col style={{ padding: 50, paddingTop: 10 }}>
              <Row>
                <Col
                  style={{ padding: 5, paddingTop: 10, width: "100%" }}
                  className="btn text-right"
                >
                  <Button size="lg" className="btnClass3">
                    General
                  </Button>
                </Col>

                <Col
                  style={{ padding: 5, paddingTop: 10 }}
                  className="btn text-center"
                >
                  <Button size="lg" className="btnClass4">
                    Company
                  </Button>
                </Col>

                <Col
                  style={{ padding: 5, paddingTop: 10 }}
                  className="btn text-right"
                >
                  <Button size="lg" className="btnClass5">
                    Engineers
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> 

      <Row>
        <Col style={{ padding: 20 }}></Col>
      </Row>
    </Container>
  );
}

export default Content;
