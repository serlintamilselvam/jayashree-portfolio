import React from 'react'
import './About.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import jayashreeProfilePic from '../../Assets/Images/jayashree_profile.jpg'

// Import custom modal
import LetsTalkForm from '../../Components/Modals/LetsTalkForm/LetsTalkForm'

class About extends React.Component {

    constructor() {
        super()
        this.state = {
            letsTalkModal: {
                show: false
            }
        }
        this.showLetsTalkModal = this.showLetsTalkModal.bind(this)
        this.closeLetsTalkModal = this.closeLetsTalkModal.bind(this)
    }

    render() {
        return (
            <div className="about-jay background-bubble">

                <LetsTalkForm 
                    show={this.state.letsTalkModal.show}
                    onChange={this.closeLetsTalkModal}/>

                <Container>
                    <Row className="custom-row-spacing">
                        <Col xs={{span: 12, order: 1}} md={{ span: 5, order: 1 }}>
                            <div className="img-content">
                                    <img
                                        alt="Jayashree Profile Pic" 
                                        src={ jayashreeProfilePic } 
                                    />
                            </div>
                            <div className="education-info">
                                <div>
                                    <FontAwesomeIcon icon="graduation-cap" size="1x" color="#28a745" />
                                    <span> Master of Science. CS, Bishop's University, Canada</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon="map-marker-alt" size="1x" color="#007bff" />
                                    <span> Montreal, Canada</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={{span: 12, order: 12}} md={{ span: 7, order: 12 }} className="content-div">
                            <h2 className="title-text">About</h2>
                            <h3 className="sub-title-text">Hi, I'm Jayashree Srinivasan</h3>
                            <div className="desc-text">
                                I am a budding UX designer, focusing on proving the best experience to users on their journey.
                            </div>
                            <div className="desc-text">
                            My dream career was to make good changes that directly impact people. UX designing made it possible for my dreams to come true.
                            </div>
                            <Button 
                                variant="success" 
                                className="btn-grad"
                                onClick={this.showLetsTalkModal}>Let's Talk</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    showLetsTalkModal = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                letsTalkModal: {
                    ...previousState.letsTalkModal,
                    show: true
                }
            }
        })
    }

    closeLetsTalkModal = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                letsTalkModal: {
                    ...previousState.letsTalkModal,
                    show: false
                }
            }
        })
    }

}

export default About