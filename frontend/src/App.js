
import React, {Component} from "react"
import Site from './components/Site'
import Client from './components/Client'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Authorization from './components/Client/authorization'
import Registration from './components/Client/registration'

import Grid  from 'react-bootstrap/lib/Grid';
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Grid>
                    <h1 className='text-center'>
                        My first project in React
                    </h1>
                    <Route path='/'exact component={Site}/>
                    <Route path='/Client' component={Client}/>
                </Grid>
            </BrowserRouter>
        )
    }
}

export default App
