import React from 'react'
import './Theme.scss'

import { Container, Row, Col } from 'react-bootstrap'
import darkModeBtn from '../../Assets/Images/dark_mode_btn.png'
import lightModeBtn from '../../Assets/Images/light_mode_btn.png'
import resume from '../../Assets/Resume/resume.pdf'

// React Redux
import { connect } from 'react-redux'
import { UpdateTheme }  from '../../Actions/theme'

class Theme extends React.Component {

    changeWebsiteMode() {
        this.props.UpdateTheme(!this.props.theme)
    }

    render() {
        
        let chosenBtn = (this.props.theme) ? darkModeBtn : lightModeBtn

        return (
            <div className="theme-wrapper">
                <Container>
                    <Row>
                        <Col xs={6} md={6} className="btn-text">
                            <a variant="danger" href={resume} className="download-prof btn btn-danger" download>Download profile</a>
                        </Col>
                        <Col xs={6} md={6} className="toggle-bar">
                            <img 
                                src={ chosenBtn } alt="Dark mode enabled"
                                onClick={this.changeWebsiteMode.bind(this)} />
                        </Col>
                    </Row> 
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
    return {
        UpdateTheme
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Theme)