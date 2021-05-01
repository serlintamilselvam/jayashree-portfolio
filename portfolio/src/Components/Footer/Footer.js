import React from 'react'
import './Footer.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'
import darkModeBtn from '../../Assets/Images/dark_mode_btn.png'


class Footer extends React.Component {

    changeWebsiteMode() {
        alert("Oops! Sorry We are still working on light theme implementation.")
    }

    render() {
        return (
            <div className="footer-wrapper">
                <Container>
                    <Row>
                        <Col xs={6} md={6} className="btn-text">
                            <Button variant="danger" className="download-prof">Download profile</Button>
                        </Col>
                        <Col xs={6} md={6} className="toggle-bar">
                            <img 
                                src={darkModeBtn} alt="Dark mode enabled"
                                onClick={this.changeWebsiteMode.bind(this)} />
                        </Col>
                    </Row> 
                </Container>
            </div>
        )
    }
}

export default Footer