import './Footer.scss'

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className="jay-footer">
            <Container fluid="lg">
            <Row>
                <Col xs={4} md={4}>
                    Contact
                </Col>
                <Col xs={4} md={4}>
                    Email
                </Col>
                <Col xs={4} md={4}>
                    LinkedIn
                </Col>
            </Row> 
            </Container>
        </div>
    )
}

export default Footer