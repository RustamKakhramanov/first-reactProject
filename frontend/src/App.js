
import React, {Component} from "react"
import Site from './components/Site'
import Client from './components/Client'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

import Grid  from 'react-bootstrap/lib/Grid';
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component{
    render(){
        return(
            <Grid>
                <header>
                    <h1 className="text-center">Hello world</h1>
                </header>
                <Switch>
                        <Route exact path="/" component={Site}/>
                        <Route path="/client" component={Client}/>
                </Switch>
            </Grid>

        )
    }
}

export default App
