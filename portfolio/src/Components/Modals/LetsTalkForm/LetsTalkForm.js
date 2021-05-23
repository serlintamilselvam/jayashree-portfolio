import React from 'react'
import dotenv from 'dotenv'
import './LetsTalkForm.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactFormInputValidation from "react-form-input-validation"

import { Modal, Button, Container, Form, Col, Row } from 'react-bootstrap'

// React Redux
import { connect } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { LoaderShown, LoaderHidden } from '../../../Actions/loader'

// API Service
import EmailService from '../../../Services/EmailService'

dotenv.config()

const EmailObj = new EmailService()

class LetsTalkForm extends React.Component {

    constructor() {
        super()
        this.state = {
            fields: {
                name: "",
                subject: "",
                message: "",
                email: ""
            },
            errors: {}
        }

        this.form = new ReactFormInputValidation(this)

        this.form.useRules({
            name: "required",
            subject: "required",
            message: "required",
            email: "required|email"
        })

        this.form.onformsubmit = (fields) => {

            let adminEmailAddress = process.env.REACT_APP_ADMIN_EMAIL_ADDRESS

            let data = {
                "to": adminEmailAddress,
                "subject": "Portfolio: " + fields.subject,
                "text": "Name: " + fields.name + "\nEmail: " + fields.email + "\nMessage: " + fields.message
            }

            this.props.LoaderShown(!this.props.loader.isLoaderShown)

            EmailObj.sendAdmin(data).then((response) => {

                let responseData = response.data.response
                if(responseData.result === 'success') {
                    // Hide Loader
                    toastr.success('Jayashree: ', 'Thank you for sending email!!')
                    this.props.LoaderHidden(!this.props.loader.isLoaderShown)
                    this.resetForm()
                    this.handleChange('save')
                } else {
                    // Hide Loader
                    this.props.LoaderHidden(!this.props.loader.isLoaderShown)
                    toastr.error('An error occurred! Please verify if you have entered details')
                }
                }).catch((err) => {
                    // Hide Loader
                    this.props.LoaderHidden(!this.props.loader.isLoaderShown)
                    toastr.error('An error occurred! Please try again after sometime')
                    console.log(err)
                })
        }

        this.handleChange = this.handleChange.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }

    render() {

        console.log("process.env.production. ", process.env)

        return (
            <div className="lets-talk-wrapper">
                <Modal className="custom-modal-style" size="md" backdrop="static" show={this.props.show} keyboard={false} animation={false} onHide={() => this.handleChange('cancel')}>
                    <Modal.Header closeButton>
                        <Modal.Title>Let's Talk!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Form id="lets-talk-form" className="lets-talk-form w-100" onSubmit={this.form.handleSubmit}>
                                <Row>
                                    <Col sm={12}>
                                    <div className="bubble-one"><FontAwesomeIcon icon="circle" size="5x"/></div>
                                        <Form.Group>
                                            <Form.Control 
                                                type="text"
                                                className="question-text"
                                                name="name"
                                                placeholder="Name*"
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.name}
                                                required />
                                            <Form.Label className="error custom-label">{this.state.errors.name ? "*"+this.state.errors.name : ""}</Form.Label>
                                            <Form.Control 
                                                type="email"
                                                className="question-text"
                                                name="email"
                                                placeholder="Email*"
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.email}
                                                required/>
                                            <Form.Label className="error custom-label">{this.state.errors.email ? "*"+this.state.errors.email : ""}</Form.Label>
                                            <Form.Control 
                                                type="text"
                                                className="question-text"
                                                name="subject"
                                                placeholder="Subject*"
                                                onChange={this.form.handleChangeEvent}
                                                value={this.state.fields.subject}
                                                required/>
                                            <Form.Label className="error custom-label">{this.state.errors.subject ? "*"+this.state.errors.subject : ""}</Form.Label>
                                            <Form.Control 
                                                className="question-text"
                                                as="textarea" 
                                                rows="3"
                                                name="message"
                                                placeholder="Message*"
                                                value={this.state.fields.message}
                                                onChange={this.form.handleChangeEvent}
                                                required/>
                                            <Form.Label className="error custom-label">{this.state.errors.message ? "*"+this.state.errors.message : ""}</Form.Label>
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

    handleChange(actionPerformed) {

        let taskPerformed = {
            action: actionPerformed
        }

        this.props.onChange(taskPerformed)
    }

    resetForm() {
        this.setState((previousState) => {
            return {
                ...previousState,
                fields: {
                    ...previousState.fields,
                    name: "",
                    subject: "",
                    message: "",
                    email: ""
                }
            }
        })
    }

}

const mapStateToProps = (state) => {
    return {
        event: state.event,
        loader: state.loader
    }
}

const mapDispatchToProps = () => {
    return {
        LoaderShown,
        LoaderHidden
    }
}


export default connect(mapStateToProps, mapDispatchToProps())(LetsTalkForm)