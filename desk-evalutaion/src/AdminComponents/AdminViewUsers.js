import React from 'react';
import logo from '../codestone logo.png';
import {Link } from 'react-router-dom'
import '../bootstrap.min.css'

import '../bootstrap.min.css'

import  Customers  from "../Components/customers";
 

function Home() {
  return (
    
      <div> 
        <Header/>
     
     
   <p>Admin view of users and their forms  </p>

 

<Customers />
     </div>
  );
}


function Header(){
    return (
  
      <div class="jumbotron">
        <div className = "User-Menu">
      <Link>User details  </Link>
      </div>
      <img className='profile-image' alt='icon' src={logo} width="340" height="60"/>
  
      
      <LoginForm/>
    </div>
  
    
    
      )
    }
  


  function LoginForm (){
  return(
    <div>
      <br/>
 <Link to= '/home'><button type="button" class="btn btn-light">Home</button></Link>
 <Link to= '/admin-question-editor'><button type="button" class="btn btn-light">Question Editor (Admin)</button></Link>

 
  </div>
  )
}






  
  
  export default Home;