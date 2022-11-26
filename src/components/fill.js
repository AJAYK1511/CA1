import React from "react";
import './stylee.css';
class RegisterForm extends React.Component {
  constructor() {
    super();
    this.state = {  //this.state is usually react object used to contain data or information about component 
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);   //triggered by input element and triggers the changing of this state  
    this.userRegistrationForm = this.userRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  userRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Please fill the column";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "Invalid email";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "Invalid Email";
      }
    }

  

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Please fill the Password";
    }

   
    if (typeof fields["password"] !== "undefined") {
        if (fields["password"].match((/^[a-z]*$/))) {
          formIsValid = false;
          errors["password"] = "Password is weak";
        }
        else if (fields["password"].match((/^[a-zA-Z ]*$/))) {
          formIsValid = false;
          errors["password"] = "Password is Good";
        }
        else if (fields["password"].match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
          formIsValid = false;
          errors["password"] = "Password is Strong";
        }
        else{
          formIsValid = false;
          errors["password"] = "Password is very Strong";
        }
      }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

  render() {
    return (
    <div id="main-registration-container" className="zero">
        <h1>Dynamic Form</h1>
         <div className="one" id="register">
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.userRegistrationForm} >
          <br></br>
        <h4>Enter your username</h4>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} placeholder="your Username" />
        <div className="errorMsg">{this.state.errors.username}</div>
        <h4>Enter your email</h4>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  placeholder="your EmailId" />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <h4>Enter your password</h4>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} placeholder="your Password" />
        <div className="errorMsg">{this.state.errors.password}</div>
        <br></br><br></br>
        
        <input type="submit" className="button"  value="Go in"/>
        <br></br><br></br>
        </form>
    </div>
  </div>
  
      );
  }


}

export default RegisterForm