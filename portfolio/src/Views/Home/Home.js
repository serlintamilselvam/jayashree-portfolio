import React from 'react'
import './Home.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ladyRight from '../../Assets/Images/cartoon_girl_right.png'
import ladyLeft from '../../Assets/Images/cartoon_girl_left.png'

// React Redux
import { connect } from 'react-redux'

// Import custom components
import Theme from '../../Components/Theme/Theme' 

class Home extends React.Component {


    redirectToAbout() {
        this.props.history.push(`/about`)
    }

    render() {

        const mql = window.matchMedia('(max-width: 767px)')

        let imgUrl = ladyRight
        if(mql.matches) {
            imgUrl = ladyLeft
        }

        let chosenTheme = (this.props.theme) ? "dark" : "light"

        return(
            <div className={`home-page container-height theme-${chosenTheme}`}>
                <Container>
                    <Row className="custom-row-spacing">
                        <Col xs={{span: 12, order: 12}} md={{ span: 2, order: 1 }}>
                            <div className="social-media-links-wrap">
                                <div className={`vertical-line-${chosenTheme}`}></div>
                                <div className="icons">
                                    <a className={`${chosenTheme}`} 
                                        title="LinkedIn"
                                        href="https://www.linkedin.com/in/jayashree-srinivasan-40aa7a179/?originalSubdomain=ca" 
                                        target="_blank"
                                        rel="noreferrer">
                                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
                                    </a>
                                </div>
                                <div className="icons">
                                    <a className={`${chosenTheme}`}
                                        title="Instagram"
                                        href="https://instagram.com/jayashree_srinivasan_?igshid=1x9bp3l11rvxe" 
                                        target="_blank"
                                        rel="noreferrer">
                                            <FontAwesomeIcon icon={['fab', 'instagram-square']} color="#cd486b" size="2x" />
                                    </a>
                                </div>
                                <div className="icons">
                                    <a className={`${chosenTheme}`}
                                        title="Facebook"
                                        href="https://www.facebook.com/manis12987789" 
                                        target="_blank"
                                        rel="noreferrer">
                                            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
                                    </a>
                                </div>
                                <div className={`vertical-line-${chosenTheme}`}></div>
                            </div>
                        </Col>
                        <Col xs={{span: 12, order: 8}} md={{ span: 5, order: 8 }}>
                            <div className="greeting-content">
                                <div className="jay-text">
                                    Hey, I'm Jayashree <FontAwesomeIcon icon="hand-spock" size="1x" color="#ffdc5d" />
                                </div>
                                <div className="second-text">
                                    I <b>grow</b> designs <br /> that <b>people</b> love..
                                </div>
                                <Button 
                                    variant="success" 
                                    className="btn-grad"
                                    onClick={this.redirectToAbout.bind(this)}>Discover more!
                                </Button>
                            </div>
                        </Col>
                        <Col xs={{span: 12, order: 1}} md={{ span: 5, order: 12 }}>
                            <div className="img-content">
                                <img
                                    alt="Cartoon on right" 
                                    src={ imgUrl } 
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Theme />
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

export default connect(mapStateToProps, mapDispatchToProps())(Home)