import React from 'react'
import './Sections.scss'

// Import Custom component
import Section from './Section'

//Import Image
import jay from '../../Assets/Images/jay_photo.jpg'
import musicApp from '../../Assets/Images/music_app.png'
import letsTalk from '../../Assets/Images/lets_talk.png'
import jayashreeText from '../../Assets/Images/jayshree_text.gif'
import leaderboard from '../../Assets/Images/leaderboard.png'
import furnitureshop from '../../Assets/Images/furniture_shop.png'

class SectionsContainer extends React.Component {
    
    constructor() {
        super()
        this.state = {
            letsTalk: {
                url: letsTalk,
                alt: "Jayshree Portfolio Website"
            },
            jayashreeText: {
                url: jayashreeText,
                alt: "Hi I am Jayashree"
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
                        "The music player is a powerful application that randomly plays songs from the favourite artist they have chose. The app also plays songs alphabetically from the chosen artist."
                    ],
                    image: {
                        url: musicApp,
                        order: 1,
                        alt: "Music Player User Interface"
                    }
                }, {
                    title: "Leader Board",
                    order: 1,
                    texts: [
                        "The score board is a mobile app, that displays the ranking of people in a particular day, week and all time. It allows easy understaning of ones self progress as well as their team mates."
                    ],
                    image: {
                        url: leaderboard,
                        order: 12,
                        alt: "Leader Board"
                    }
                }, {
                    title: "The Furniture Store",
                    order: 12,
                    texts: [
                        "The furniture store app interface is designed in such a way that it is easy to navigate and shop in the most efficient way. "
                    ],
                    image: {
                        order: 1,
                        url: furnitureshop,
                        alt: "The Furniture Store"
                    }
                }]
            }]
        }
    }

    render() {
        return (
            <Section contents={ this.state.contents } letsTalk={this.state.letsTalk} jayashreeText={this.state.jayashreeText}></Section>
        )
    }

}

export default SectionsContainer