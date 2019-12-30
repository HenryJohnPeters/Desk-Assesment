import React from 'react';


import '../bootstrap.min.css'
import logo from '../codestone logo.png';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./Home"
import ResetPassword from './ResetPassword';
import  LoginPage  from "./LoginPage";
import { Link } from "react-router-dom";



function Register() {
  return (

    
        <div className = "App">
          <Header/>
      <SignUp/>

</div>
  
  );
}



function SignUp (){
  return(
    <div className = "login">
    <input type = "text" id = "emailAddress" placeholder = "Enter Email"/>
    <br/>
    <input type = "text" id = "password" placeholder = "Enter Password"/>
    <br/>
    <input type = "text" id = "password" placeholder = "Enter Password"/>
    <br/>
    <br/>
    <button >Send Verfication Email </button>
    
   <p> <Link to= '/reset'> Reset Password  </Link></p>
    </div>
  )
}


function Header(){
  return (
    <div class="jumbotron">
    <img className='profile-image' alt='icon' src={logo} width="450" height="80"/>
  </div>
  
    )
  }export default Register;