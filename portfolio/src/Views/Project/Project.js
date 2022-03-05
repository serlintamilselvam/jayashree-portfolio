import React from 'react'
import './Project.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomCarousel from '../../Components/CustomCarousel/CustomCarousel' 

import plantProcessImage from '../../Assets/Images/plant_process_image.JPG'
import flower1 from '../../Assets/Images/flower_1.png'
import flower4 from '../../Assets/Images/flower_4.png'
import flower3 from '../../Assets/Images/flower_3.png'
import flower2 from '../../Assets/Images/flower_2.png'
import lofi1 from '../../Assets/Images/lofi_1.PNG'
import lofi2 from '../../Assets/Images/lofi_2.PNG'
import lofi3 from '../../Assets/Images/lofi_3.PNG'
import hifi1 from '../../Assets/Images/hifi_1.png'
import hifi2 from '../../Assets/Images/hifi_2.png'
import hifi3 from '../../Assets/Images/hifi_3.png'
import ios from '../../Assets/Images/ios_design_process.png'
import persona1 from '../../Assets/Images/persona_1.PNG'
import persona2 from '../../Assets/Images/persona_2.PNG'
import userJourney1 from '../../Assets/Images/user_journey_1.PNG'
import sitemap from '../../Assets/Images/sitemap.png'
import final_ios_output_1 from '../../Assets/Images/final_ios_output_1.png'
import final_ios_output_2 from '../../Assets/Images/final_ios_output_2.png'

// React Redux
import { connect } from 'react-redux'

class Project extends React.Component {

    constructor() {
        super()
        this.state = {
            projectsContent: [{
                id: 1,
                title: "Infinity - Event planner",
                projectLink: "https://www.figma.com/proto/Qvr312U5c5WeCzK3WTlEws/Portfolio-works---2?page-id=0%3A1&node-id=2%3A122&starting-point-node-id=2%3A122&scaling=scale-down",
                subTopics: [{
                    title: 'Project details',
                    value: 'Infinity helps people plan and execute events with the help of the company. Through the website, the event planners or the owners can keep track of their vendors, venues, guest list and so on. The web design showcases a variety of events the company has created.',
                    hasImage: false
                }, {
                    title: 'Type',
                    value: 'Self learning project',
                    hasImage: false
                }, {
                    title: 'Duration',
                    value: '3 weeks',
                    hasImage: false
                }, {
                    title: 'Deliverable',
                    value: 'High-fidelity interactive prototype demonstrating key functionality',
                    hasImage: false
                }, {
                    title: 'Role',
                    value: 'UX designer, UI designer',
                    hasImage: false
                }, {
                    title: 'Summary',
                    value: [
                        "Designed a Web Application to plan and execute events",
                        "Conducted Foundational Research to identify the problem statement and brand identity of the company.",
                        "Eliminated Biases such as Implicit and Sunk Cost Fallacy using Empathy Map, User Stories, and Personas to express the user’s perspective.",
                        "Modeled the Paper Prototype using Lorem Ipsum to bring an idea and understanding to the design for conversion to a High - Fidelity Wireframe, to conduct a usability study, and identify pain points.",
                        "Created Site Map using hierarchical structure to incorporate a responsive webpage.",
                        "Designed Mockups following the visual and typographic hierarchy to synthesis design."
                    ],
                    hasImage: false
                }, {
                    title: 'Tools',
                    value: 'Figma, Adobe XD',
                    hasImage: false
                }, {
                    title: 'Problem and solution recognition',
                    value: [
                        "The motto of the project was to recreate and rebrand the ‘Infinity’ site to more accommodate user needs and establish a more contactless event planning and execution while preserving the brand originality and features that the stakeholders are known for.",
                        "The solution was to simply tone down the amount of information on the website and bring in more features keeping in mind the fact that features speak more than people.",
                        "With some foundational research, the idea was to categorize events into personal, corporate and public. This way users can choose their service without any confusion or limited options.",
                        "By allowing the user to choose their own budget and the features the queries and doubts can be reduced."
                    ],
                    hasImage: false
                }, {
                    title: 'Motivation',
                    value: [
                        "Create a design and experience which brings joy and a seamless journey to the user while trying to choose their event plan and budget.",
                        "Create a competitive UI which stands unique."
                    ],
                    hasImage: false
                }, {
                    title: 'Reliability',
                    value: 'Everything must work seamlessly and be as transparent as possible',
                    hasImage: false
                }, {
                    title: 'Process',
                    value: 'A business-centered process with a focus on qualitative data collection and analysis to extract user expectations vs availability. Personas, problem statements, competitive analysis etc., to get the insight of what the design problem and solution should be. Then the design process',
                    hasImage: true,
                    imgUrl: [{imgUrl:ios}]
                }, {
                    title: 'Persona',
                    hasImage: true,
                    imgUrl: [{
                        imgUrl: persona1
                    }, {
                        imgUrl: persona2
                    }]
                }, {
                    title: 'Site maps',
                    value: 'Site maps are created to organize content and maintain information hierarchy. A hierarchical sitemap outlines the relationship between pages in order of importance.',
                    hasImage: true,
                    imgUrl: [{imgUrl:sitemap}]
                }, {
                    title: 'Low Fidelity (Lo-Fi) Mockup',
                    hasImage: true,
                    imgUrl: [{
                        imgUrl: lofi1
                    }, {
                        imgUrl: lofi2
                    }, {
                        imgUrl: lofi3
                    }]
                }, {
                    title: 'High Fidelity (Hi-Fi) Mockup',
                    hasImage: true,
                    imgUrl: [{
                        imgUrl: hifi1
                    }, {
                        imgUrl: hifi2
                    }, {
                        imgUrl: hifi3
                    }]
                }, {
                    title: 'Reason to choose from the above primitive prototypes',
                    hasImage: false,
                    value: 'Primitive prototypes are mainly created to bring up design ideas that demonstrate the best user flow. Now, not all the designs need to be chosen based on exactly how they are designed. A new design can be formed by taking into account all the top features of all the primitive designs. To help us with the decision, we can mark the best features that the team decides on at the meeting and proceed to develop it. This way we eliminate conflicts between which design would have a better reach.' 
                }, {
                    title: 'Mockup',
                    hasImage: true,
                    imgUrl: [{
                        imgUrl: final_ios_output_1
                    }, {
                        imgUrl: final_ios_output_2
                    }]
                }]
            }, {
                id: 2,
                title: "Self-Care- Products, Mobile Application",
                projectLink: "https://www.figma.com/proto/gf4SzUsMtH0PIxAx6vHGZJ/Self-Care-products?node-id=1%3A5&scaling=scale-down",
                subTopics: [{
                    title: 'Project details',
                    value: 'The ‘Self-care’ is an iOS application that sells beauty products through an app. Because of the simple UI, it is extremely easy to use. With ‘Self-care’ one can easily order and get products delivered at doorstep.',
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
                    value: 'UX designer, UI designer',
                    hasImage: false
                }, {
                    title: 'Summary',
                    value: [
                        "Designed an iOS Application to purchase self-care products online using the pre-existing web application.",
                        "Identified the Problem Statement with Qualitative Research and KPIs.",
                        "Conducted Feedback Survey and Usability Study to understand pain points of the end-user",
                        "Identified Biases and expressed the need to overcome them through Personas, User Stories and Empathy Maps",
                        "Ideated the project focusing on quality through Brainstorming and Crazy Eight methods",
                        "Executed Competitive Audit to further investigate the features and designs implemented by competitors",
                        "Researched the existing Wireframe to identify Pain Points in the new design to improve User Experience",
                        "Implemented Soft UI Design techniques using the Google Material Design System"
                    ],
                    hasImage: false
                }, {
                    title: 'Tools',
                    value: 'Figma, Adobe XD',
                    hasImage: false
                }, {
                    title: 'Problem and solution recognition',
                    value: [
                        "The problem was to build an iOS application for an existing website. Although the website is highly responsive, the stakeholders needed an application that is fully functional.",
                        "The solution was to build an iOS application that had the latest UI trends. It matches the product's ideology and the best user flow."
                    ],
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
                    imgUrl: [{imgUrl:ios}]
                }, {
                    title: 'Research',
                    value: 'The main research was to understand how the users are currently accepting the available apps. The main problem we found out was a lack of organization and product information on a gist. People were made to search for products and their features manually which was such a painful factor. The important finding was there were a lot of productivity apps for android but only a handful of apps were found on the apple store.',
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
                    imgUrl: [{
                        imgUrl: lofi1
                    }, {
                        imgUrl: lofi2
                    }, {
                        imgUrl: lofi3
                    }]
                }, {
                    title: 'High Fidelity (Hi-Fi) Mockup',
                    hasImage: true,
                    imgUrl: [{
                        imgUrl: hifi1
                    }, {
                        imgUrl: hifi2
                    }, {
                        imgUrl: hifi3
                    }]
                }, {
                    title: 'Reason to choose from the above primitive prototypes',
                    hasImage: false,
                    value: 'Primitive prototypes are mainly created to bring up design ideas that demonstrate the best user flow. Now, not all the designs need to be chosen based on exactly how they are designed. A new design can be formed by taking into account all the top features of all the primitive designs. To help us with the decision, we can mark the best features that the team decides on at the meeting and proceed to develop it. This way we eliminate conflicts between which design would have a better reach.' 
                }, {
                    title: 'Mockup',
                    hasImage: true,
                    imgUrl: [{
                        imgUrl: final_ios_output_1
                    }, {
                        imgUrl: final_ios_output_2
                    }]
                }]
            }, {
                id: 3,
                title: "The Grow Room, E-Commerce website",
                projectLink: "https://www.figma.com/proto/x5NRX5uqXaa571zUi6S7kF/Flowers-and-Bouquet?node-id=13%3A12&scaling=min-zoom",
                subTopics: [{
                    title: 'Project details',
                    value: 'A flower and bouquet website, which helps people to purchase and deliver flowers with message cards and. This website showcases a variety of flowers and bouquets that are grown and prepared by local farmers. It mainly focuses on promoting online business by featuring online purchases, discounts, and scheduled deliveries.',
                    hasImage: false
                }, {
                    title: 'Summary',
                    value: [
                        "Designed a Web Application to purchase flowers and its bouquet online with a subscription plan.",
                        "Conducted Foundational Research to identify the problem statement and brand identity of the company.",
                        "Eliminated Biases such as Implicit and Sunk Cost Fallacy using Empathy Map, User Stories, and Personas to express the user’s perspective.",
                        "Modeled the Paper Prototype using Lorem Ipsum to bring an idea and understanding to the design for conversion to a High - Fidelity Wireframe, to conduct a usability study, and identify pain points",
                        "Created Site Map using hierarchical structure to incorporate a responsive webpage.",
                        "Designed Mockups following the visual and typographic hierarchy to synthesis design."
                    ],
                    hasImage: false
                }, {
                    title: 'Solution proposed',
                    value: [
                        "When a user proceeds to complete the flower purchase with the payment, an intermediate overlay opens up which specifically asks the user “Would you like to add a message card with a name in this purchase?” and allow the user to click “yes” or “no” with the user's preference. If yes, it would redirect them to a card-themed page, where they can fill out the message. Else, they can simply continue the purchase without a card.",
                        "This page can help users understand that adding a message with the flower delivery is not a mandatory action, yet it would present users with an opportunity to use this optional feature in an effective manner."
                    ],
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
                    value: 'UX designer, UI designer',
                    hasImage: false
                }, {
                    title: 'Motivation',
                    value: [
                        "Create a design and experience which brings joy and a seamless journey to the user while trying to buy or gift flowers and bouquets.",
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
                    imgUrl: [{imgUrl: plantProcessImage}]
                }, {
                    title: 'Research',
                    value: 'The research was conducted on quantitative analysis data which was available online. The data collected was helpful in determining the user needs on an uncommon website.',
                    hasImage: false
                }, {
                    title: 'Persona',
                    hasImage: true,
                    imgUrl: [{
                        imgUrl: persona1
                    }, {
                        imgUrl: persona2
                    }]
                }, {
                    title: 'User Journey map',
                    hasImage: true,
                    imgUrl: [{imgUrl: userJourney1}]
                }, {
                    title: 'Research',
                    value: 'The research conducted was a survey after the purchase was made by the users.',
                    hasImage: false
                }, {
                    title: 'Site maps',
                    value: 'Site maps are created to organize content and maintain information hierarchy. A hierarchical sitemap outlines the relationship between pages in order of importance.',
                    hasImage: true,
                    imgUrl: [{imgUrl:sitemap}]
                }, {
                    title: 'Wireframes',
                    value: 'The solutions that are considered in the ideate process are converted into "Hi-fi" prototypes',
                    hasImage: false,
                }, {
                    title: 'Current page prototype',
                    hasImage: true,
                    imgUrl: [{imgUrl: flower4}]
                }, {
                    title: 'Solution 1',
                    value: 'Using a checkbox on shipping information page',
                    hasImage: true,
                    imgUrl: [{imgUrl: flower3}]
                }, {
                    title: 'Solution 2',
                    value: 'Adding a separate page after adding to cart or shipping information to ask if they would like to add a message card if it is a  gift.',
                    hasImage: true,
                    imgUrl: [{imgUrl: flower2}]
                }, {
                    title: 'Solution chosen',
                    hasImage: true,
                    imgUrl: [{imgUrl: flower1}]
                }, {
                    title: 'Reason',
                    value: 'This solution was chosen to save time, be efficient as well as make the user notice the message card feature. When user clicks add to cart or Buy now, the overlay pops up asking if they would like to add a message card. If they say yes, it takes them to the page where they can add their message and name. From there, they can continue to the shipping information page. If not they will be directed to the shipping information page.',
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

export default connect(mapStateToProps, mapDispatchToProps())(Project)