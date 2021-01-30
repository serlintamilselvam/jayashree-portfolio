import React from 'react'
import './Sections.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

//Import Image
import jay from '../../Assets/Images/jay_photo.jpg'
import checkoutPage from '../../Assets/Images/checkout_page.png'
import musicApp from '../../Assets/Images/music_app.png'
import sampleLogo from '../../Assets/Images/sample_logo.png'

class Sections extends React.Component {
    
    constructor() {
        super()
        this.state = {
            contents: [{
                id: "about",
                title: "About",
                isSubTitleBlack: true,
                sections: [{
                    title: "Hi, I'm Jayashree Srinivasan",
                    order: 1,
                    texts: [
                        "I’m a new grad in MSc. Computer Science. I am passionate about building usable, visually captivating UI designs.",
                        "Currently being involved in the trend participating in the daily UI challenge. Check out my challenges in the featured work section."
                    ],
                    image: {
                        url: jay,
                        order: 12,
                        alt: "Profile Picture of Jayashree"
                    }
                }]
            }, {
                id: "featured-work",
                title: "Featured Work",
                isSubTitleBlack: false,
                sections: [{
                    title: "Music Player",
                    order: 12,
                    texts: [
                        "The music player is a poweful application that randomly plays songs from the favourite artist they have chose. The app also plays songs alpahabatically from the chosen artist."
                    ],
                    image: {
                        url: musicApp,
                        order: 1,
                        alt: "Music Player User Interface"
                    }
                }, {
                    title: "Checkout Page",
                    order: 1,
                    texts: [
                        "The standard checkout page designed for any online shopping, is quite easy to navigate through and make a payment."
                    ],
                    image: {
                        url: checkoutPage,
                        order: 12,
                        alt: "Checkout Page"
                    }
                }, {
                    title: "Sample Logo Design",
                    order: 12,
                    texts: [
                        "Logo is one of the most important things a business requires to stand out unique. The one that catches the eys stays."
                    ],
                    image: {
                        order: 1,
                        url: sampleLogo,
                        alt: "Sample Logo Design"
                    }
                }]
            }]
        }
    }

    render() {
        return (
            <Section contents={ this.state.contents }></Section>
        )
    }

}


function Section(props) {
    return (
        <div className="section-wrapper">
        { props.contents.length > 0 &&
            props.contents.map((singleContent, key) => {
                return (
                    <div className="content-section" key={ key } id={ singleContent.id }>
                        <Container fluid="lg">
                            <h2 className="section-title">
                                { singleContent.title }
                            </h2>
                            { singleContent.sections.length > 0 &&
                                singleContent.sections.map((subsection, sectionKey) => {
                                    return (
                                        <Row key={ sectionKey } className="custom-row-spacing">
                                            <Col xs={{span: 12, order: 1}} md={{ span: 6, order: subsection.image.order }}>
                                                <ImageContent imageContent={ subsection.image } />
                                            </Col>
                                            <Col xs={{span: 12, order: 12}} md={{ span: 6, order: subsection.order }}>
                                                <TextContent textContent={ subsection } titleColor={ singleContent.isSubTitleBlack } />
                                            </Col>
                                        </Row>     
                                    )
                                })
                            }
                        </Container>
                    </div>
                )
            })
        }
        <Button variant="danger" className="download-btn">Download Profile</Button>
        </div>

    )
}

function TextContent(props) {
    return (
        <div className="text-content">
            
            <h3 className={(props.titleColor ? 'section-sub-title' : 'blue-section-sub-title')}>
                { props.textContent.title }
            </h3>
            
            { props.textContent.texts.length > 0 &&
                props.textContent.texts.map((singleContent, key) => {
                    return (
                        <p key={ key }>{ singleContent }</p>
                    )
                })
            }
        </div>
    )
}

function ImageContent(props) {
    return (
        <div className="image-content">
            <img 
                alt={ props.imageContent.alt } 
                src={ props.imageContent.url } 
            />
        </div>
    )
}

export default Sections