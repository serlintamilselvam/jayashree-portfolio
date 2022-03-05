import React from 'react'
import './ProjectList.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'
import CustomCarousel from '../../Components/CustomCarousel/CustomCarousel'

//Images
import beautifulApp from '../../Assets/Images/beautiful_app.png'
import plantLife from '../../Assets/Images/flower_and_bouquet.PNG'
import eventPrototype from '../../Assets/Images/event_prototype.png'
import alarm from '../../Assets/Images/MiniProjects/alarm.png'
import balance from '../../Assets/Images/MiniProjects/balance.png'
import diary from '../../Assets/Images/MiniProjects/diary.png'
import iceCreamParlour1 from '../../Assets/Images/MiniProjects/ice_cream_parlour_1.png'
import iceCreamParlour2 from '../../Assets/Images/MiniProjects/ice_cream_parlour_2.png'
import interiorDecor1 from '../../Assets/Images/MiniProjects/interior_decor _1.png'
import interiorDecor2 from '../../Assets/Images/MiniProjects/interior_decor_2.png'
import moondeer from '../../Assets/Images/MiniProjects/moondeer.png'
import photographerPrevUi from '../../Assets/Images/MiniProjects/photographer_prev_ui.png'

// React Redux
import { connect } from 'react-redux'

class ProjectList extends React.Component {

    constructor() {
        super()
        this.state = {
            projectsContent: [{
                id: 1,
                title: "Infinity - Event planner",
                description: "Infinity helps people plan and execute events with the help of the company. Through the website, the event planners or the owners can keep track of their vendors, venues, guest list and so on. The web design showcases a variety of events the company has created. ",
                img: eventPrototype,
                order: {
                    img: 12,
                    text: 1
                }
            }, {
                id: 2,
                title: "Self-Care- Products, Mobile Application",
                description: "The ‘Self-care’ is an iOS application that sells beauty products through an app. Because of the simple UI, it is extremely easy to use. With ‘Self-care’ one can easily order and get products delivered at doorstep.",
                img: beautifulApp,
                order: {
                    img: 1,
                    text: 12
                }
            }, {
                id: 3,
                title: "The Grow Room, E-Commerce website",
                description: "A flower and bouquet website, which helps people to purchase and deliver flowers with message cards and. This website showcases a variety of flowers and bouquets that are grown and prepared by local farmers. It mainly focuses on promoting online business by featuring online purchases, discounts, and scheduled deliveries.",
                img: plantLife,
                order: {
                    img: 12,
                    text: 1
                }
            }],
            miniProjectsContent: [{
                imgUrl: alarm,
                name: "Alarm"
            }, {
                imgUrl: balance,
                name: "Event Poster"
            }, {
                imgUrl: diary,
                name: "Home page - Diary and biography - Web Design"
            }, {
                imgUrl: iceCreamParlour1,
                name: "Home page - Ice cream parlor - Web Design"
            }, {
                imgUrl: iceCreamParlour2,
                name: "Home page - Ice cream parlor - Web Design"
            }, {
                imgUrl: interiorDecor1,
                name: "Home page - Interior design - Web Design"
            }, {
                imgUrl: interiorDecor2,
                name: "Home page - Interior design - Web Design"
            }, {
                imgUrl: moondeer,
                name: "MoonDeer - showcasing UI design in figma"
            }, {
                imgUrl: photographerPrevUi,
                name: "Profile page - Hire photographer - Mobile app"
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
                <Container className="custom-contain">
                    <h1>Mini Projects</h1>
                    <CustomCarousel imgUrl = {this.state.miniProjectsContent} />
                </Container>
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