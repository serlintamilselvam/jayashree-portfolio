import React from 'react'
import './ProjectList.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

//Images
import beautifulApp from '../../Assets/Images/beautiful_app.png'
import plantLife from '../../Assets/Images/flower_and_bouquet.PNG'

// React Redux
import { connect } from 'react-redux'

class ProjectList extends React.Component {

    constructor() {
        super()
        this.state = {
            projectsContent: [{
                id: 1,
                title: "Self-Care- Products, Mobile Application",
                description: "The ‘Self-care’ is an iOS application that sells beauty products through an app. Because of the simple UI, it is extremely easy to use. With ‘Self-care’ one can easily order and get products delivered at doorstep.",
                img: beautifulApp,
                order: {
                    img: 12,
                    text: 1
                }
            }, {
                id: 2,
                title: "Flowers and Bouquet, E-Commerce website",
                description: "A flower and bouquet website, which helps people to purchase and deliver flowers with message cards and. This website showcases a variety of flowers and bouquets that are grown and prepared by local farmers. It mainly focuses on promoting online business by featuring online purchases, discounts, and scheduled deliveries.",
                img: plantLife,
                order: {
                    img: 1,
                    text: 12
                }
            }]
        }
    }

    redirectToProject(projectId) {
        this.props.history.push(`/project/list/${projectId}`)
    }

    render() {

        let chosenTheme = (this.props.theme) ? "dark" : "light"

        return (
            <div className="background-bubble project-list container-height">
                {
                    this.state.projectsContent.map((singleContent, key) => {
                        return(
                            <Container key={singleContent.id} className="custom-contain">
                                <h1>{ singleContent.title }</h1>
                                <Row className="custom-row-spacing">
                                    <Col xs={{span: 12, order: singleContent.order.text}} md={{ span: 6, order: singleContent.order.text }} className="content-div">
                                        <div className={`content-container content-container-${chosenTheme}`}>
                                            <div className="project-text">
                                                { singleContent.description }
                                            </div>
                                            <div className="img-content d-block d-md-none">
                                                <img
                                                    alt={ singleContent.title }
                                                    src={ singleContent.img } 
                                                />
                                            </div>
                                            <div className="btn-wrap">
                                                <Button 
                                                    variant="success"  
                                                    className="btn-grad" 
                                                    onClick={this.redirectToProject.bind(this, singleContent.id)}>See full project
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={{span: 12, order: singleContent.order.img}} md={{ span: 6, order: singleContent.order.img }} className="img-div d-none d-md-block">
                                        <div className="img-content">
                                            <img
                                                alt= { singleContent.title }
                                                src={ singleContent.img } 
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        theme: state.theme.isDarkTheme
    }
}

const mapDispatchToProps = () => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps())(ProjectList)