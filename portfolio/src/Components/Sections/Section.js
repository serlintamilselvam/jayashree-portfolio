import { Container, Row, Col, Button } from 'react-bootstrap'

//Importing custom Component
import LetsTalk from './LetsTalk/LetsTalk'
import TextContent from './TextContent'
import ImageContent from './ImageContent'

function Section(props) {
    return (
        <div className="section-wrapper">

        <LetsTalk letsTalk={ props.letsTalk } jayashreeText={props.jayashreeText} />

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
                                            <Col xs={{span: 12, order: 12}} md={{ span: 6, order: subsection.image.order }}>
                                                <ImageContent imageContent={ subsection.image } />
                                            </Col>
                                            <Col xs={{span: 12, order: 1}} md={{ span: 6, order: subsection.order }}>
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

export default Section