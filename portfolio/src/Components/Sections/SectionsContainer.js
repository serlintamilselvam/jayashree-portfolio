import React from 'react'
import './Sections.scss'

// Import Custom component
import Section from './Section'

//Import Image
import jay from '../../Assets/Images/jay_photo.jpg'
import checkoutPage from '../../Assets/Images/checkout_page.png'
import musicApp from '../../Assets/Images/music_app.png'
import sampleLogo from '../../Assets/Images/sample_logo.png'
import letsTalk from '../../Assets/Images/lets_talk.png'

class SectionsContainer extends React.Component {
    
    constructor() {
        super()
        this.state = {
            letsTalk: {
                url: letsTalk,
                alt: "Jayshree Portfolio Website"
            },
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
            <Section contents={ this.state.contents } letsTalk={this.state.letsTalk}></Section>
        )
    }

}

export default SectionsContainer