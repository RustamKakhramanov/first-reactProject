import React,{Component} from "react"
import Grid  from 'react-bootstrap/lib/Grid';
import Col  from 'react-bootstrap/lib/Col';
import Row  from 'react-bootstrap/lib/Row';
import Button  from 'react-bootstrap/lib/Button';
import {Link} from 'react-router-dom';

import Client from '../Client'
import Color from '../Color'

import "./style.css"


class Site extends Component{
    constructor(props){
        super(props);
        this.state = {
            viewColor: false,
            viewClient:false
        }
        this.toogleColor = this.toogleColor.bind(this);

        
    }
    toogleColor(){
        this.setState({viewColor: !this.state.viewColor})
    }
    render(){
        var color;
        if(this.state.viewColor)
        color = <Color/>
        else color = '';
        return(
                <Grid className='mrgn'>
                    <Row >
                        <Col xs={12} md={6} className='text-center'>
                            <h3 className='title'>Random color selecter</h3>
                            {color}
                         
                            <span className={this.state.viewColor?'btn-sel':'btn btn-primary btn-sel'} onClick={this.toogleColor}>{this.state.viewColor?'Hide':'Click to view'}</span>
                        </Col>
                        <Col xs={12} md={6} className='text-center'>
                            <h3 className='title'>Form for registration and authorization</h3>
                            <Link className='btn btn-primary btn-sel' to="/client">Click to view</Link>
                        </Col>
                    </Row>
                </Grid>
        )
    }
}
export default Site
