import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutMe from '../component/Home/AboutMe'
import Portfolio from '../component/portfolio/Portfolio'


const Main = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route  exact path='/' component={AboutMe} />
                <Route exact path='/portfolio' component={Portfolio} />

            </Switch>
        </BrowserRouter>
    )
}

export default Main