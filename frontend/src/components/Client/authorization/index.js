import React,{Component} from "react"
import axios from 'axios'
import Grid  from 'react-bootstrap/lib/Grid';
import Form  from 'react-bootstrap/lib/Form';
import Button  from 'react-bootstrap/lib/Button';


class Authorization extends Component{
    constructor(props){
        super(props);
        this.state = {email:'', password: '', message:'',disabled:true};
        this.onChangeUser = this.onChangeUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onSubmit(event){
        event.preventDefault();
        var Signin = {
            email: this.state.email,
            password: this.state.password,
        }
    
        axios.post('http://react.learn/Core/Client.php', {
            Signin
        }).then((res)=>{
            if(res.data == 'success'){
                alert("Success Authorization");
                document.location.href = '/'
            }else{
                this.setState({msg:res.data})
            }
        }).catch((err)=>{
            console.log(err);
        });
        
    }
    
    onChangeUser(e){
        const value = e.target.name;
        this.setState({[value]: e.target.value});

        if(this.state.email && this.state.password)
            this.state.disabled = false;
        if(!this.state.email || !this.state.password)
            this.state.disabled = true;
    }
    render(){
        return(
        <div >
            <h3 >
               Authorization
            </h3>

            <Form id="form-login">
                <div className="form-group">
                    <input type="text" className="form-control" name="email" value={this.state.email} onChange={this.onChangeUser} placeholder="E-mail"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.onChangeUser} placeholder="Password"/>
                </div>
                <Button bsStyle="success" type="submit" onClick={this.onSubmit}  disabled={this.state.disabled} >Submit</Button>
                <div className="msg"><span >{this.state.msg}</span></div>
            </Form>
        </div>

        )
    }
}
export default Authorization
