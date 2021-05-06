import React from 'react'
import './ProjectList.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'

//Images
import fileManager from '../../Assets/Images/file_manager.png'
import plantLife from '../../Assets/Images/plant_life.png'

// React Redux
import { connect } from 'react-redux'

class ProjectList extends React.Component {

    constructor() {
        super()
        this.state = {
            projectsContent: [{
                id: 1,
                title: "File manager",
                description: "File manager is an easy and powerful file explorer for iOs devices. Because of the simple UI, it’s extremely easy to use. With the file manager, one can simply organize and store files.",
                img: fileManager,
                order: {
                    img: 12,
                    text: 1
                }
            }, {
                id: 2,
                title: "Plant life",
                description: "Plant life is a plant adoption website, helps people adopt plants with information about maintenance and other sensitivities of the plant. This way it makes it easier for users to decide from a huge variety of plants. Users can also gift plants from this site.",
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
            <div className="background-bubble project-list">
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