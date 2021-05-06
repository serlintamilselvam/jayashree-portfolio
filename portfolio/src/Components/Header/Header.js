import './Header.scss'

import { Container, Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

//Import Image
import logo from '../../Assets/Images/jayashree_logo.png'

function Header(props) {

    const pageData = [{
        name: "Home",
        url: "/",
    }, {
        name: "About",
        url: "/about"
    }, {
        name: "Projects",
        url: "/projects"
    }]

    const chosenTheme = useSelector(state => state.theme)

    let theme = 'dark'
    if(!chosenTheme.isDarkTheme) {
        theme = 'light'
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    } else {
        document.body.style.backgroundColor = "#030015"
        document.body.style.color = "white"
    }

    return (
        <Navbar animation="false" bg={theme} variant={theme} expand="lg" className={`header-wrapper banner-${theme}`}>
            <Container>
                <Navbar.Brand href="/">
                    <img className="logo" src={ logo } alt="Jayashree Portfolio Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" animation="true">
                    <Nav className="ml-auto">
                        {
                            pageData.map((singleValue, key) => {
                                return (
                                    <CustomNavLink currentUrl={ props.location.pathname } key={key} data={singleValue} />
                                )})
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
}

function CustomNavLink(props) {

    const currentUrl = props.currentUrl
    let addActive = ''

    if(currentUrl === props.data.url) {
        addActive = 'active'
    }

    return (
        <Link className={`nav-link ${addActive}`} to={props.data.url}>
            {
                (props.data.url ==='/') ? 
                    <FontAwesomeIcon icon="home" /> :
                    props.data.name 
            }
        </Link>
    )
}

export default Header