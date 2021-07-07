import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';

function ButtonFoot() {
    return (
        <Container>
            <Row>
            <Col style={{ padding: 50, paddingTop: 10 }}>
              <Row style={{height:200,alignItems:'center'}}>
                <Col
                 style={{ padding: 5, paddingTop: 10,paddingRight:20, width: "100%",textAlign:'right' }}
                  className="btns text-right"
                >
                  <Button size="lg" className="btnClass6">
                    Post a project 
                  </Button>
                </Col>

                <Col
                  style={{ padding: 5, paddingTop: 10,paddingLeft:20}}
                  className="btns text-left"
                >
                  <Button size="lg" className="btnClass7">
                    Find a project
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row> 
        </Container>
    )
}

export default ButtonFoot;
