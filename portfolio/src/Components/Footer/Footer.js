import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="jay-footer" id="contact">
                <Container fluid="lg">
                    <Row>
                        <Col xs={4} md={4} className="contact-text">
                            Contact
                        </Col>
                        <Col xs={4} md={4}>
                            <a className="open-mail" href="mailto:jayashreesrinivasan12@gmail.com"><FontAwesomeIcon icon="envelope" size="3x"/></a>
                        </Col>
                        <Col xs={4} md={4}>
                            <a href="https://www.linkedin.com/in/jayashree-srinivasan-40aa7a179/?originalSubdomain=ca" 
                            target="_blank"
                            rel="noreferrer">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/>
                            </a>
                        </Col>
                    </Row> 
                </Container>
            </div>
            <div className="developer-credits">
                <b>Developed By: </b><a href="https://ca.linkedin.com/in/serlin-tamilselvam-240a12133" rel="noreferrer" target="_blank">Serlin Tamilselvam</a>
            </div>
        </div>
    )
}

export default Footer