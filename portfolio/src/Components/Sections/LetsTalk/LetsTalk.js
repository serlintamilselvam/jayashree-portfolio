import './LetsTalk.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

function LetsTalk(props) {
    return(
        <div className="lets-talk">
            <Container fluid="lg">
                <Row>
                    <Col xs={12} md={4} sm={12} className="lets-talk-img">
                        <img 
                            alt={ props.letsTalk.alt } 
                            src={ props.letsTalk.url } 
                        />
                    </Col>
                    <Col xs={12} md={8} sm={12}>
                        <Button variant="success">Let's Talk</Button>
                        <Button variant="success" href="#featured-work">Featured Works</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LetsTalk