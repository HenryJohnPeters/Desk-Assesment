import React from 'react';


import '../bootstrap.min.css'
import logo from '../codestone logo.png';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./Home"
import ResetPassword from './ResetPassword';
import  LoginPage  from "./LoginPage";
import { Link } from "react-router-dom";
import { relative } from 'path';
import Popup from "reactjs-popup";


function Login() {
  return (

    
        <div className = "App">
          <Header/>
      <LoginForm/>


</div>
  
  );
}


function LoginForm (){
  return(

    
    <div className = "App">
      
     <div className = "Help-Button"><Popup trigger={ <Link >  ℹ️ </Link>} > 
<div> Enter Codestone email address and the password assigned to this account. </div>
</Popup>
</div>


      
    <input type = "text" id = "emailAddress" placeholder = "Enter Email"/>
    
    <br/>
    <input type = "text" id = "password" placeholder = "Enter Password"/>
    <br/>
    <br/>
    <button >Login</button>
    <p> <Link to= '/Register'> Sign Up </Link></p>
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
  }export default Login;