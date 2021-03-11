import './LetsTalkForm.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Modal, Button, Container, Form, Col, Row } from 'react-bootstrap'

const LetsTalkForm = (props) => {


    const handleChange = (actionPerformed, editedValue='') => {

        let taskPerformed = {
            action: actionPerformed
        }

        props.onChange(taskPerformed)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        let str = 'mailto:jayashreesrinivasan12@gmail.com?subject=' + event.target.elements.subject.value + "&body="
        str += "Name: " + event.target.elements.name.value + "%0D%0AEmail:" + event.target.elements.email.value + "%0D%0AMessage:" + event.target.elements.message.value
        window.open(str, "_blank")
        handleChange('save')

    }


    return (
        <div className="lets-talk-wrapper">
            <Modal className="custom-modal-style" size="md" backdrop="static" show={props.show} keyboard={false} animation={false} onHide={() => handleChange('cancel')}>
                <Modal.Header closeButton>
                    <Modal.Title>Let's Talk!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form className="lets-talk-form w-100" onSubmit={(e) => handleFormSubmit(e)}>
                            <Row>
                                <Col sm={12}>
                                <div className="bubble-one"><FontAwesomeIcon icon="circle" size="5x"/></div>
                                    <Form.Group>
                                        <Form.Control 
                                            type="text"
                                            className="question-text"
                                            name="name"
                                            placeholder="Name*"
                                            required/>
                                        <Form.Control 
                                            type="email"
                                            className="question-text"
                                            name="email"
                                            placeholder="Email*"
                                            required/>
                                        <Form.Control 
                                            type="text"
                                            className="question-text"
                                            name="subject"
                                            placeholder="Subject*"
                                            required/>
                                        <Form.Control 
                                                className="question-text"
                                                as="textarea" 
                                                rows="3"
                                                name="message"
                                                placeholder="Message*"
                                                required/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="modal-center">
                                <Button variant="primary" className="custom-btn-submit" type="submit">Send Message</Button>
                            </div>
                        </Form>
                        <div className="bubble-one position-two"><FontAwesomeIcon icon="circle" size="8x"/></div>
                        <div className="position-three"><FontAwesomeIcon icon="circle" size="9x"/></div>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default LetsTalkForm