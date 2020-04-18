import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            name:'',
            hasAgreed:false
        };
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
   handleChange(e){
       let target = e.target;
       let value=target.type==='checkbox'?target.checked:target.value;
       let name = target.name;

       this.setState({
           [name]:value
       });
   }
   handleSubmit(e){
       e.preventDefault();

       console.log("form submitted")
       console.log(this.state)
   }
    render(){
    return(
        <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
             <label className="FormField__Label" htmlFor="name">Full Name</label>
             <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name" value={this.state.name} onChange={this.handleChange}/>  
          </div>

          <div className="FormField">
             <label className="FormField__Label" htmlFor="password">Password</label>
             <input type="text" id="password" className="FormField__Input" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.handleChange}/>  
          </div>

          <div className="FormField">
             <label className="FormField__Label" htmlFor="email">Email</label>
             <input type="text" id="email" className="FormField__Input" placeholder="Enter your Email" name="email" value={this.state.email} onChange={this.handleChange}/>  
          </div>

          <div className="FormField">
             <label className="FormField__CheckboxLabel">
             <input className="FormField__CheckboxLabel" type="checkbox"  name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/>I agree all 
             statement in <a href="" className="FormField__TermsLink">terms of service</a>
             </label>  
          </div>

          <div className="FormField">
             
             <button className="FormField__Button mr-20">Sign Up</button><Link to="/sign-in"
             className="FormField__Link">I'm already member</Link>  
          </div>

          </form>
 </div>
    );

    }
}

export default SignUpForm;