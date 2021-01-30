import './Header.scss'

import { Container, Navbar, Nav } from 'react-bootstrap'

//Import Image
import logo from '../../Assets/Images/jay_logo.png'

function Header(props) {
    return (
        <Navbar animation="false" bg="white" expand="lg" className="header-wrapper">
            <Container>
            <Navbar.Brand href="#home">
                <img className="logo" src={ logo } alt="Jayashree Portfolio Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" animation="false">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#featured-work">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
}

export default Header