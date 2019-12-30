import  React from 'react';
import logo from '../codestone logo.png';

const ResetPassword = () => {
    return ( 
        <div className = "App">  
        <Header/>
        
        <input type = "text" id = "emailAddress" placeholder = "Enter Email"/>    
    
       <button> password reset</button> 
    


         </div>
    )
    }


    function Header(){
        return (
          <div class="jumbotron">
          <img className='profile-image' alt='icon' src={logo} width="450" height="80"/>
        </div>
        
          )
        }


        
    export default ResetPassword;