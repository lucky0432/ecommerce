import './App.css'
import React from 'react'
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
   this.setState({[nam]: val});
  }
  mySubmit = (e) => 
  {
e.preventDefault();
let m = document.getElementById("h");
m.innerHTML="<font color='red'>sdfsdf<ul>";
if(Number(this.state.username))
  {
   m.innerHTML = "<li>Username must be Alphanumeric</li>";
   }
if(this.state.password.length<8)
 {
   m.innerHTML += "<li>Password must be 8 char long</li>";
 }
m.innerHTML +="</ul></font>";

   }
  render() {
    return (
      <form onSubmit={this.mySubmit}>
      <h1>Hello {this.state.username} {this.state.age}</h1>
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      />
      <p>Enter Password:</p>
      <input
        type='password'
        name='password'
        onChange={this.myChangeHandler}
      />
       <input type="submit" />
        <div id="h"> </div>
      </form>
    );
  }
}