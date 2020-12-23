import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import ListagemUsers from './pages/Users'
import ListagemPosts from './pages/Posts'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/users" exact component={ListagemUsers} />
                <Route path="/posts" component={ListagemPosts} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes