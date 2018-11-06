import React,{Component} from "react"
import axios from 'axios'
import Grid  from 'react-bootstrap/lib/Grid';
import Form  from 'react-bootstrap/lib/Form';
import Button  from 'react-bootstrap/lib/Button';

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {name:'', email: '', password: '', repeatPassword: '', msg: '' }
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onChangeUser(e){
        const value = e.target.name;
        this.setState({[value]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        var Signup = {
            email: this.state.email,
            name:this.state.name,
            password: this.state.password
        }

        if(Signup.password != this.state.repeatPassword)
            this.setState({msg:'Passwords do not match'});
        else{
            axios.post('http://react.learn/Core/Client.php', {
                Signup
            }).then((res)=>{
                if(res.data == 'success'){
                    alert("Success Registration");
                    document.location.href = '/'
                }else{
                    this.setState({msg:res.data})
                }
            }).catch((err)=>{
                console.log(err);
            });
        }

       
       
    }
    render(){
        return(
            <div>
                <h1 className='text-center'>
                    Registration
                </h1>
                <Form>
                    <div className="form-group">
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeUser} name="name" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" value={this.state.email}  onChange={this.onChangeUser} name="email" placeholder="E-mail"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" value={this.state.password}  onChange={this.onChangeUser} placeholder="Enter password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" value={this.state.repeatPassword}  onChange={this.onChangeUser}  name="repeatPassword" placeholder="Repeat password"/>
                    </div>
                    <div className="messages-form"><span>{this.state.msg}</span></div>
                    <Button bsStyle="success" type="submit"  value="registr" onClick={ this.onSubmit}>Submit</Button>
                </Form>
            </div>
            
        )
    }
}
export default Registration
