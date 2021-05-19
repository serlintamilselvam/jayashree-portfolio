import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.scss'

function Footer() {
    return(
        <div className="footer-wrapper">
            <Container>
                <div className="designer-credit">
                    Site designed with <FontAwesomeIcon icon={['fas', 'heart']} size="1x" color="red" /> by Jayashree Srinivasan
                </div>
            </Container>
        </div>
    )
}

export default Footer