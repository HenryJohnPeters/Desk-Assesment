import React from 'react';
import logo from '../codestone logo.png';
import {Link } from 'react-router-dom'
import '../bootstrap.min.css'
import {Button} from 'react'

 


function Home() {
  return (
    
      <div> 
        <Header/>
     
     
   <p>hello  this is home  tghe sdfhome tab you see </p>

  </div>
    
  );
}




function Header(){
  return (

    <div class="jumbotron">
      <div className = "User-Menu">


      


    
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
 <Link to= '/user-questions'><button type="button" class="btn btn-light">Questions</button></Link>
 <Link to= '/user-history'><button type="button" class="btn btn-light">History</button></Link>

 <Link to= '/admin-center'><button type="button" class="btn btn-light">Admin Center</button></Link>
  </div>
  )
}






  
  
  export default Home;