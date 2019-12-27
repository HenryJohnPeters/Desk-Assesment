import React from 'react';

import './App.css';
import './bootstrap.min.css'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "./Components/Home"
import ResetPassword from './Components/ResetPassword';
import  LoginPage  from "./Components/LoginPage";
import  UserQuestions  from "./Components/UserQuestions";
import  Register  from "./Components/Register";
import  History  from "./Components/History";

import  AdminCenter  from "./AdminComponents/AdminCenter";
import  AdminQuestionEditor  from "./AdminComponents/AdminQuestionEditor";
import  AdminViewUsers  from "./AdminComponents/AdminViewUsers";


import { Link } from "react-router-dom";



function Login() {
  return (
<Routing>
    
</Routing>
  
    
  );
}

function Routing (){
  return(
   <BrowserRouter>
<Switch>

      <Route exact path= '/home' exact component = {Home}/>
      <Route  exact path= '/reset' exact component = {ResetPassword}/>
      <Route  exact path= '/login' exact component = {LoginPage}/>
      <Route  exact path= '/user-questions' exact component = {UserQuestions}/>
      <Route   exact path= '/Register' exact component = {Register}/>

       <Route   exact path= '/user-history' exact component = {History}/>


      <Route   exact path= '/admin-center' exact component = {AdminCenter}/>

      <Route   exact path= '/admin-center' exact component = {AdminCenter}/>
      <Route   exact path= '/admin-view-users' exact component = {AdminViewUsers}/>
      <Route   exact path= '/admin-question-editor' exact component = {AdminQuestionEditor}/>

</Switch>
      <ul>
          <li><Link to='/home'>Home</Link></li>
          
          <li><Link to='/login'>login page</Link></li>
          
        
       </ul>  </BrowserRouter>
  )
}


export default Login;