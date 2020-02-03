import React from "react";
import logo from "../codestone logo.png";
import { Link } from "react-router-dom";
import "../bootstrap.min.css";

function Home() {
  return (
<<<<<<< HEAD
    <div>
      <Header />
      <SeveritySearch />
=======
    
      <div> 
        <Header/>
        <SeveritySearch/>
     
     
   <p>admin question editor </p>
>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8

      <p>admin question editor </p>
    </div>
  );
}

function Header() {
  return (
    <div class="jumbotron">
      <div className="User-Menu">
        <Link>User details </Link>
      </div>
<<<<<<< HEAD
      <img
        className="profile-image"
        alt="icon"
        src={logo}
        width="340"
        height="60"
      />

      <Navigation />
    </div>
  );
}

function Navigation() {
  return (
    <div>
      <br />
      <Link to="/home">
        <button type="button" class="btn btn-light">
          Home
        </button>
      </Link>
      <Link to="/admin-view-users">
        <button type="button" class="btn btn-light">
          View Users(Admin)
        </button>
      </Link>
    </div>
  );
}
=======
      <img className='profile-image' alt='icon' src={logo} width="340" height="60"/>
  
      
      <Navigation/>
    </div>
  
    
    
      )
    }
  
  function Navigation (){
  return(
    <div>
      <br/>
 <Link to= '/home'><button type="button" class="btn btn-light">Home</button></Link>
 <Link to= '/admin-view-users'><button type="button" class="btn btn-light">View Users(Admin)</button></Link>

  </div>
  )
}

function SeveritySearch (){
  return(
    <div>
      <br/>
 <Link to= '/home'><button type="button" class="btn btn-light">Home</button></Link>
 <Link to= '/admin-view-users'><button type="button" class="btn btn-light">View Users(Admin)</button></Link>

  </div>
  )
}


>>>>>>> 18183b340cb0f9aa27d295839e20a891ab449ff8

function SeveritySearch() {
  return (
    <div>
      <br />
      <Link to="/home">
        <button type="button" class="btn btn-light">
          Home
        </button>
      </Link>
      <Link to="/admin-view-users">
        <button type="button" class="btn btn-light">
          View Users(Admin)
        </button>
      </Link>
    </div>
  );
}

export default Home;
