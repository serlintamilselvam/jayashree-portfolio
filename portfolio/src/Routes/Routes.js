import React from 'react';

// React Router
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"

// import custom component
import Home from '../Views/Home/Home'
import About from '../Views/About/About'
import ProjectList from '../Views/ProjectList/ProjectList'
import Project from '../Views/Project/Project'
import Favourite from '../Views/Favourite/Favourite'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import FullPageLoader from '../Components/FullPageLoader/FullPageLoader'

function Routes() {

  const HeaderWithRouter = withRouter(Header)

return (
    <Router>
      <HeaderWithRouter/>
      <FullPageLoader />
      <Switch>
        <Route exact path={["/home", "/"]} component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/projects" component={ ProjectList } />
        <Route exact path="/project/list/:id" component={ Project }  />
        <Route exact path="/favourites" component={ Favourite } />
        {/* <Route component = {NoMatch} /> */}
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes