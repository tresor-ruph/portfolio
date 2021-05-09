import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutMe from '../component/Home/AboutMe'
import Portfolio from '../component/portfolio/Portfolio'
import MainNav from '../component/layout/Nav/MainNav'
import Activities from '../component/Activities/Activities'
import Contact from '../component/contact/Contact.jsx'
import { withRouter } from 'react-router-dom'


const Main = (props) => {
    return (

        <BrowserRouter>
            <MainNav />
            <Switch>
                <Route exact path='/' component={AboutMe} />
                {/* <Route exact path='/About-me' component={AboutMe} /> */}

                <Route exact path='/Projects' component={Portfolio}  />
                <Route exact path='/Resume' component={Contact} />
                <Route exact path='/Activities' component={Activities} />
                

            </Switch>
        </BrowserRouter>
    )
}

export default withRouter(Main)