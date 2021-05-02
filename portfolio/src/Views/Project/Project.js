import React from 'react'
import './Project.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import processImage from '../../Assets/Images/process_image.JPG'

class Project extends React.Component {

    constructor() {
        super()
        this.state = {
            projectsContent: [{
                id: 1,
                title: "File manager",
                projectLink: "https://www.figma.com/proto/I61z4Oe73xRdSpgsY9jjHG/Untitled?page-id=0%3A1&node-id=1%3A4&viewport=1002%2C3%2C0.648612916469574&scaling=scale-down",
                subTopics: [{
                    title: 'Project details',
                    value: 'File manager is an easy and powerful file explorer for iOs devices. Because of the simple UI, it’s extremely easy to use. With the file manager, one can simply organize and store files.',
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
                        "Create an experience which makes it easier to organize resources and access files.",
                        "Create a competitive UI which stands unique."
                    ],
                    hasImage: false
                }, {
                    title: 'Process',
                    value: 'A user-centered design process with  focus on quantitative data collection and analysis to extract right design insight.Specifically, personas, empathy maps to capture insight about users mind-set. The insights were condensed to design tools  followed by a rigorous design and feedback process. Each iteration was validated and the prototype was tested by users.',
                    hasImage: true,
                    imgUrl: processImage
                }, {
                    title: 'Research',
                    value: 'The main research was to understand how the users are currently accepting the available apps. The main problem we found out was lack of organization. People were made to search for folders which was  such a painful factor. The important finding was there were a lot of file managers for android but only a handful of file manager apps were found on the apple store.',
                    hasImage: false
                }, {
                    title: 'User interviews',
                    value: 'A mix of 5 graduate students from Bishop’s University were interviewed. They were selected because they were everyday users of the existing app to sort and separate the documents and other folders in their own phone.',
                    hasImage: false
                }, {
                    title: 'Few sample questions',
                    value: [
                        'How do you feel about the existing app that you use?',
                        'Any feature that could be added to the app?',
                        'What is the most painful task to perform?'
                    ],
                    hasImage: false
                }, {
                    title: 'Competitive analysis',
                    value: 'The competitive app chosen was the built-in file manager app in iOs devices.',
                    hasImage: false
                }]
            }, {
                id: 2,
                title: "Plant life",
                projectLink: "https://www.figma.com/proto/5e0lCuczTK7ijssYZb7zX4/Plantlife?page-id=0%3A1&node-id=125%3A1&viewport=-43%2C359%2C0.2573953866958618&scaling=scale-down",
                subTopics: [{
                    title: 'Project details',
                    value: 'Plant life is a plant adoption website, helps people adopt plants with information about maintenance and other sensitivities of the plant. This way it makes it easier for users to decide from a huge variety of plants. Users can also gift plants from this site.',
                    hasImage: false
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

        return(
            <div className="single-project background-bubble">
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
                                <div className="content-container-wrap">
                                    {
                                        this.state.projectsContent[projectId-1].subTopics.map((singleContent, key) => {
                                            return (
                                                <div className="content-container" key={key}>
                                                    <span className="sub-title">{singleContent.title}: </span>
                                                    <span className="sub-desc">
                                                        {
                                                            (!Array.isArray(singleContent.value))? 
                                                                singleContent.value: 
                                                                singleContent.value.map((singleValue, singleKey) => {
                                                                    return (
                                                                        <ol key={singleKey}>
                                                                            <li>{singleValue}</li>
                                                                        </ol>
                                                                    )
                                                                })
                                                        }
                                                    </span>
                                                    {
                                                        (singleContent.hasImage) ? 
                                                            <div className="img-content">
                                                                <img src={singleContent.imgUrl} alt="Process" />
                                                            </div> :
                                                            ''
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

export default Project