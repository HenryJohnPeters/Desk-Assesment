import React from 'react';
import logo from '../codestone logo.png';
import {Link } from 'react-router-dom'
import '../bootstrap.min.css'
import {Button} from 'react'


function Home() {
  return (
    
      <div> 
        <Header/>
     
     
   <p>History of users  </p>

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
 
 

 
  </div>
  )
}






  
  
  export default Home;