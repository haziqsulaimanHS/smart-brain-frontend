import React from "react";

class Register extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      name : "",
      email : "",
      password : ""
    }
  }

  onNameChange = (event) =>{
    this.setState({name : event.target.value})
  }
  onEmailChange = (event) =>{
    this.setState({email : event.target.value})
  }

  onPasswordChange = (event) =>{
    this.setState({password : event.target.value})
  }

  onSubmitRegister = () => {
    fetch("https://54.253.16.78.nip.io/register",
      //http://localhost:3001/register
    {
      method : "post",
      headers : {"Content-type" : "application/json"},
      body : JSON.stringify({
        name : this.state.name,
        email : this.state.email,
        password : this.state.password
      })
    })
    .then(response => response.json())
    .then(user => {
      if(user.id){
        this.props.loadUser(user);
        this.props.onRouteChange("home");
      }
    })
  }

  render(){  
    const {onRouteChange} = this.props;
  return(
        <article className="br5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center ">
          <main className="pa4 black-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Create New Account</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="name" 
                  name="name"  
                  id="name"
                  onChange={this.onNameChange}/>
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="email" 
                  name="email-address"  
                  id="email-address/" 
                  onChange={this.onEmailChange}/>
                </div>  
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                  type="password" 
                  name="password"  
                  id="password"
                  onChange={this.onPasswordChange}/>
                </div>
              </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Create Account" 
              onClick={this.onSubmitRegister} />
            </div>
            <p className="b pointer i mt4 grow dim" onClick={()=> onRouteChange("SignIn")}>Already have an Account?</p>
          </div>
        </main>
        </article>
    );
  }
}

export default Register;