import React,{Component} from "react"
import Button  from 'react-bootstrap/lib/Button';


import "./style.css"

class Color extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'Create',
            NameH3: '',
            Names: ['text-primary', 'text-secondary', 'text-success', 'text-warning', 'text-info', 'text-light bg-dark', 'text-muted'],
            i:0
        }
        this.edit = this.edit.bind(this)
    }
    render(){
        return(
            <div className='border border-primary text-center container-colors rounded'>
                <h3 className={this.state.NameH3}>Random colors</h3>
                <Button bsStyle="success" onClick={this.edit}>{this.state.name}</Button>
            </div>
        )
    }
    edit(){
        var x = this.state.i;

        this.setState({
            NameH3 : this.state.Names[this.state.i],
        })

        x++;
        if (this.state.i == 6){
            x = 0
        }
        
        this.setState({
            i : x
        })
    }
}
export default Color

