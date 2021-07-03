import React from "react";
import {
  Accordion,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";
import { useContext, useState } from "react";
import { GiExpander } from "react-icons/gi";
import { AiOutlineMinusCircle } from "react-icons/ai";
import Content from "./Content";

function Expander() {
  const [activeicon1, setActiveicon1] = useState(false);
  const [activeicon2, setActiveicon2] = useState(true);
  const [activeicon3, setActiveicon3] = useState(true);

  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            onClick={() => setActiveicon1(!activeicon1)}
          >
            {activeicon1 ? (
              <GrAddCircle
                AiOutlineMinusCircle
                size="20px"
                style={{ float: "left", marginTop: 8 }}
              />
            ) : (
              <AiOutlineMinusCircle size="20px" style={{ float: "left", marginTop: 8}} />
            )}

            <p style={{ marginLeft: 30, marginTop: 5,fontSize:18 }}>
              How to post the projects?
            </p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              id quam ut neque. Quam massa enim ultrices suscipit quis non.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            className="toggle2"
            as={Card.Header}
            eventKey="1"
            onClick={() => setActiveicon2(!activeicon2)}
          >
            {activeicon2 ? (
              <GrAddCircle
                AiOutlineMinusCircle
                size="20px"
                style={{ float: "left", marginTop: 8 }}
              />
            ) : (
              <AiOutlineMinusCircle size="20px" style={{ float: "left", marginTop: 8 }} />
            )}
            <p style={{ marginLeft: 30, marginTop: 5 ,fontSize:18 }}>
             
              How to post the projects?

            </p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              id quam ut neque. Quam massa enim ultrices suscipit quis non.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            className="toggle3"
            as={Card.Header}
            eventKey="2"
            onClick={() => setActiveicon3(!activeicon3)}
          >
            {activeicon3 ? (
              <GrAddCircle
                AiOutlineMinusCircle
                size="20px"
                style={{ float: "left", marginTop: 8 }}
              />
            ) : (
              <AiOutlineMinusCircle size="20px" style={{ float: "left", marginTop: 8 }} />
            )}
            <p style={{ marginLeft: 30, marginTop: 5,fontSize:18  }}>

              How to post the projects?
            </p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
              id quam ut neque. Quam massa enim ultrices suscipit quis non.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}

export default Expander;
