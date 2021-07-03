import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';

function ButtonFoot() {
    return (
        <Container>
            <Row>
        <Col style={{ padding: 50,marginTop:220 }}>
          <Row>
            <Col style={{ padding: 50, paddingTop: 10 }}>
              <Row>
                <Col
                 style={{ padding: 5, paddingTop: 10,paddingRight:20, width: "100%",textAlign:'right' }}
                  className="btns text-right"
                >
                  <Button size="lg" className="btnClass6">
                    General
                  </Button>
                </Col>

                <Col
                  style={{ padding: 5, paddingTop: 10,paddingLeft:20}}
                  className="btns text-left"
                >
                  <Button size="lg" className="btnClass7">
                    Company
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row> 
        </Container>
    )
}

export default ButtonFoot;
