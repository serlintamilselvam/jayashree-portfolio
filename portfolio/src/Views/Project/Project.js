import React from 'react'
import './Project.scss'

import { Container, Row, Col, Button, Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import processImage from '../../Assets/Images/process_image.JPG'
import plantProcessImage from '../../Assets/Images/plant_process_image.JPG'
import plantWireFrame1 from '../../Assets/Images/plant_wireframe_1.JPG'
import plantWireFrame2 from '../../Assets/Images/plant_wireframe_2.JPG'
import plantWireFrame3 from '../../Assets/Images/plant_wireframe_3.JPG'
import lofi1 from '../../Assets/Images/lofi_1.PNG'
import lofi2 from '../../Assets/Images/lofi_2.PNG'
import lofi3 from '../../Assets/Images/lofi_3.PNG'
import hifi1 from '../../Assets/Images/hifi_1.png'
import hifi2 from '../../Assets/Images/hifi_2.png'
import hifi3 from '../../Assets/Images/hifi_3.png'

// React Redux
import { connect } from 'react-redux'

class Project extends React.Component {

    constructor() {
        super()
        this.state = {
            projectsContent: [{
                id: 1,
                title: "Beautiful",
                projectLink: "https://www.figma.com/proto/gf4SzUsMtH0PIxAx6vHGZJ/beauty-products?page-id=0%3A1&node-id=1%3A5&viewport=190%2C288%2C0.19974184036254883&scaling=scale-down",
                subTopics: [{
                    title: 'Project details',
                    value: 'The ‘Beautiful’  is an iOs application that sells beauty products through an app. Because of the simple UI, it is extremely easy to use. With ‘Beautiful’ one can easily order and get products delivered at doorstep.',
                    hasImage: false
                }, {
                    title: 'Type',
                    value: 'Self learning project',
                    hasImage: false
                }, {
                    title: 'Duration',
                    value: '2 weeks',
                    hasImage: false
                }, {
                    title: 'Deliverable',
                    value: 'High-fidelity interactive prototype demonstrating key functionality',
                    hasImage: false
                }, {
                    title: 'Role',
                    value: 'DX designer',
                    hasImage: false
                }, {
                    title: 'Tools',
                    value: 'Figma, Adobe XD',
                    hasImage: false
                }, {
                    title: 'Motivation',
                    value: [
                        "Create an experience which makes it easier to order and get to know about products easily.",
                        "Create a competitive UI which stands unique."
                    ],
                    hasImage: false
                }, {
                    title: 'Process',
                    value: 'A user-centered design process with  focus on quantitative data collection and analysis to extract right design insight.Specifically, personas, empathy maps to capture insight about users mind-set. The insights were condensed to design tools  followed by a rigorous design and feedback process. Each iteration was validated and the prototype was tested by users.',
                    hasImage: true,
                    imgUrl: [processImage]
                }, {
                    title: 'Research',
                    value: 'The main research was to understand how the users are currently accepting the available apps. The main problem we found out was lack of organization and product information on a gist. People were made to search for products and their features manually which was  such a painful factor. The important finding was there were a lot of product apps  for android but only a handful of apps were found on the apple store.',
                    hasImage: false
                }, {
                    title: 'User interviews',
                    value: 'A mix of 5 graduate students from Bishop’s University were interviewed. They were selected because they were frequent users of the existing app to buy beauty products regularly.',
                    hasImage: false
                }, {
                    title: 'Few sample questions',
                    value: [
                        'How do you feel about the existing app that you use?',
                        'Any feature that could be added to the app?',
                        'What is the most painful task to perform?',
                        'Competitive analysis: The competitive app chosen was the product’s close competitor’s app in iOs devices.'
                    ],
                    hasImage: false
                }, {
                    title: 'Low Fidelity (Lo-Fi) Mockup',
                    hasImage: true,
                    imgUrl: [lofi1, lofi2, lofi3]
                }, {
                    title: 'High Fidelity (Hi-Fi) Mockup',
                    hasImage: true,
                    imgUrl: [hifi1, hifi2, hifi3]
                }]
            }, {
                id: 2,
                title: "Plant life",
                projectLink: "https://www.figma.com/proto/5e0lCuczTK7ijssYZb7zX4/Plantlife?page-id=0%3A1&node-id=125%3A1&viewport=-43%2C359%2C0.2573953866958618&scaling=scale-down",
                subTopics: [{
                    title: 'Project details',
                    value: 'Plant Life is a plant adoption website, helps people adopt plants with information about maintenance and other sensitivities of the plant. This way it makes it easier for users to decide from a huge variety of plants. Users can also gift plants from this site.',
                    hasImage: false
                }, {
                    title: 'Type',
                    value: 'Self learning project',
                    hasImage: false
                }, {
                    title: 'Duration',
                    value: '2.5 weeks',
                    hasImage: false
                }, {
                    title: 'Deliverable',
                    value: 'High-fidelity interactive prototype demonstrating key functionality',
                    hasImage: false
                }, {
                    title: 'Role',
                    value: 'DX designer, UI designer',
                    hasImage: false
                }, {
                    title: 'Motivation',
                    value: [
                        "Create a design and experience which brings joy and seamless journey to the user while trying to buy or gift plants.",
                        "Create a competitive UI/UX which stands unique."
                    ],
                    hasImage: false
                }, {
                    title: 'Reliability',
                    value: 'Everything must work seamlessly and be as transparent as possible',
                    hasImage: false
                }, {
                    title: 'Process',
                    value: 'A business-centered process with focus on qualitative data collection and analysis to extract user expectations vs availability. Personas, problem statements, competitive analysis etc., to get the insight of what the design problem and solution should be. Then the design process ->',
                    hasImage: true,
                    imgUrl: [plantProcessImage]
                }, {
                    title: 'Research',
                    value: 'The research was conducted on quantitative analysis data which was available online. The data collected was helpful in determining the user needs on an uncommon website.',
                    hasImage: false
                }, {
                    title: 'Wireframes',
                    value: '“Hi-fi” prototypes',
                    hasImage: true,
                    imgUrl: [plantWireFrame1, plantWireFrame2, plantWireFrame3]
                }]
            }]
        }
    }

    redirectToPreviousProject(projectId) {
        this.props.history.push(`/projects`)
    }

    render() {

        const re = /^[0-9\b]+$/
        const projectId = this.props.match.params.id
        let chosenTheme = (this.props.theme) ? "dark" : "light"

        return(
            <div className="single-project background-bubble container-height">
                {
                    (projectId === '' || !re.test(projectId) || this.state.projectsContent.length < projectId || projectId<=0) ? '':

                    <Container className="custom-contain">
                        <div className="title-div-wrap">
                            <h1 className="float-left"> {this.state.projectsContent[projectId-1].title} </h1>
                            <Button 
                                className="float-right prototype-btn" 
                                href={this.state.projectsContent[projectId-1].projectLink} 
                                target="_blank"
                                rel="nofollow"
                                variant="link" title="View prototype">View prototype
                            </Button>
                        </div>

                        <Row className="custom-row-spacing">
                            <Col xs={{span: 12, order: 1}} md={{ span: 12, order: 1 }}>
                                <div className={`content-container-wrap content-container-wrap-${chosenTheme}`}>
                                    {
                                        this.state.projectsContent[projectId-1].subTopics.map((singleContent, key) => {
                                            return (
                                                <div className="content-container" key={key}>
                                                    <span className="sub-title">{singleContent.title}: </span>
                                                    <span className="sub-desc">
                                                        {
                                                            (!Array.isArray(singleContent.value))? 
                                                                singleContent.value: 
                                                                <ol>
                                                                    {
                                                                        singleContent.value.map((singleValue, singleKey) => {
                                                                            return (
                                                                                    <li key={singleKey}>
                                                                                        {singleValue}
                                                                                    </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ol>
                                                        }
                                                    </span>
                                                    {
                                                        (singleContent.hasImage) ? 
                                                            <CustomCarousel imgUrl = {singleContent.imgUrl} />: ''
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                        </Row>
                        <div className="next-page-btn">
                            <Button 
                                className="common-btn previous-page"
                                title="Go Back"
                                onClick={this.redirectToPreviousProject.bind(this, projectId+1)}>
                                    <FontAwesomeIcon icon="arrow-left" size="1x" /> Go Back
                            </Button>
                        </div>
                    </Container>
                }
            </div>
        )
    }

    componentDidMount() {

        const re = /^[0-9\b]+$/
        const projectId = this.props.match.params.id

        if(projectId === '' || !re.test(projectId) || this.state.projectsContent.length < projectId || projectId<=0) {
            this.props.history.push('/projects')
        }
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

function CustomCarousel(props) {
    return (
        (props.imgUrl.length > 1) ? 
            <Carousel>
                {props.imgUrl.map((singleImage, imageKey) => {
                    return (
                        <Carousel.Item key={imageKey}>
                            <IndividualItem  singleImage={singleImage} />
                        </Carousel.Item>
                    )
                })}
            </Carousel>:
            props.imgUrl.map((singleImage, imageKey) => {
                return (
                    <IndividualItem  singleImage={singleImage} key={imageKey} />
                )
            })
    )
}

function IndividualItem(props) {
    return (
        <div className="img-content">
            <img src={props.singleImage} alt="Process" />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps())(Project)