import React,{Component} from "react"
import "./style.css"
import Registration from './registration'
import Authorization from './authorization'
import {Link} from 'react-router-dom';

class Client extends Component{
    constructor(props){
        super(props);
        this.selected = this.selected.bind(this);
        this.state = {select: true}        
    }
    selected(){
        this.setState({select: !this.state.select});
    }

    render(){
        var client;
        if (this.state.select)
            client = <Authorization/>
        else client = <Registration/>
        return(
                <div className="text-center ">
                    <h3 className='title'>Form for registration and authorization</h3>
                    <div className="form-container">
                    {client}
                        <span className='select' onClick={this.selected}>{this.state.select ? 'Signup': 'Signin'}</span>
                    </div>
                    <Link to="/"  className='btn-sel'>Back to home</Link>
                </div>
                
      
        )
    }
}
export default Client
