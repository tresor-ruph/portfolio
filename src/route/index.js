import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutMe from '../component/AboutMe/AboutMe'
import Project from '../component/Projects/Project'
import NavBar from '../component/Nav/NavBar'
import Activities from '../component/Activities/Activities'
import ActivityDescription from '../component/Activities/ActivityDescription'
import Contact from '../component/contact/Contact.jsx'
import SummaryTable from '../component/Activities/SummaryTable'
import ProjectDescription from '../component/Projects/Description.jsx'
import { withRouter } from 'react-router-dom'


const Main = (props) => {
    return (

        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path='/' component={AboutMe} />
                <Route exact path='/Projects' component={Project}  />
                <Route exact path='/Projects/details/:id' component={ProjectDescription}  />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Activities' component={Activities} />
                <Route exact path='/Activities/details/:id' component={ActivityDescription} />
                <Route exact path='/activity/summary' component={SummaryTable} />

                
            </Switch>
        </BrowserRouter>
    )
}

export default withRouter(Main)