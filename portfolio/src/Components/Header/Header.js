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
    }
    // {
    //     name: "Favourite",
    //     url: "/favourites"
    // }
    ]

    const chosenTheme = useSelector(state => state.theme)

    let theme = 'dark'
    if(!chosenTheme.isDarkTheme) {
        theme = 'light'
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        document.body.style.transition = "all 0.5s linear 0s"
    } else {
        document.body.style.backgroundColor = "#030015"
        document.body.style.color = "white"
        document.body.style.transition = "all 0.5s linear 0s"
    }

    return (
        <Navbar 
            animation="true" variant={theme} 
            expand="lg" className={`header-wrapper banner-${theme}`}
            collapseOnSelect={true}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className="logo" src={ logo } alt="Jayashree Portfolio Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" animation="true">
                    <Nav className="ml-auto">
                        {
                            pageData.map((singleValue, i) => {
                                return (
                                    <CustomNavLink currentUrl={ props.location.pathname } key={i} keyvalue={i} data={singleValue} />
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
        <Nav.Link 
            eventKey={props.keyvalue} 
            as={Link}
            title={props.data.name}
            className={`nav-link ${addActive}`} 
            to={props.data.url}>
            {
                (props.data.url ==='/') ? 
                    <FontAwesomeIcon icon="home" /> : (props.data.url === '/favourites') ? <FontAwesomeIcon icon={['fas', 'heart']} color="red" /> :
                    props.data.name 
            }
        </Nav.Link>
    )
}

export default Header