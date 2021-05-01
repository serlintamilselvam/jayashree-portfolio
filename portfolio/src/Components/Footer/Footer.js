import React from 'react'
import './Footer.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'


class Footer extends React.Component {

    render() {
        return (
            <div className="footer-wrapper">
                <Container>
                    <Row>
                        <Col xs={6} md={6} className="btn-text">
                            <Button variant="danger" className="download-prof">Download profile</Button>
                        </Col>
                        <Col xs={6} md={6} className="toggle-bar">
                        </Col>
                    </Row> 
                </Container>
            </div>
        )
    }
}

export default Footer