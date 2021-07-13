import React from 'react'
import {Switch, Route, Redirect} from 'react-router'
import Home from '../pages/home'
import Profile from '../pages/profile'
import Repositorios from '../pages/repos'
import Followers from '../pages/followers'
import Following from '../pages/following'
const Rotas = props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/repos' component={Repositorios} />
        <Route exact path='/followers' component={Followers} />
        <Route exact path='/following' component={Following} />
        <Redirect from='*' to="/" />
    </Switch>

export default Rotas