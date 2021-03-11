import React from 'react'
import './LetsTalk.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

// Import custom modal
import LetsTalkForm from '../../Modals/LetsTalkForm/LetsTalkForm'


class LetsTalk extends React.Component {

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
            <div className="lets-talk">
                <LetsTalkForm 
                    show={this.state.letsTalkModal.show}
                    onChange={this.closeLetsTalkModal}/>
                <Container fluid="lg">
                    <div className="jay-img-wrapper">
                        <img className="jayashree-img"
                            src={ this.props.jayashreeText.url } 
                            alt={ this.props.jayashreeText.alt }
                        />
                    </div>
                    <Row>
                        <Col xs={12} md={4} sm={12} className="lets-talk-img">
                            <img 
                                alt={ this.props.letsTalk.alt } 
                                src={ this.props.letsTalk.url } 
                            />
                        </Col>
                        <Col xs={12} md={8} sm={12}>
                            <Button variant="success" onClick={this.showLetsTalkModal}>Let's Talk</Button>
                            <Button variant="success" href="#featured-work">Featured Works</Button>
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

export default LetsTalk