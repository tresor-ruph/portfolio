import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutMe from '../component/Home/AboutMe'
import Portfolio from '../component/portfolio/Portfolio'
import MainNav from '../component/layout/Nav/MainNav'
import { withRouter } from 'react-router-dom'


const Main = () => {
    return (

        <BrowserRouter>
            <MainNav />
            <Switch>
                <Route exact path='/' component={AboutMe} />
                {/* <Route exact path='/About-me' component={AboutMe} /> */}

                <Route exact path='/Portfolio' component={Portfolio} />
                <Route exact path='/Resume' component={Portfolio} />
                <Route exact path='/Activities' component={Portfolio} />


            </Switch>
        </BrowserRouter>
    )
}

export default withRouter(Main)