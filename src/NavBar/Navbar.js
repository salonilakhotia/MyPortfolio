import React from 'react'
import {Link, NavLink}  from 'react-router-dom'
import './navbar.css';


function Navbar(){
    return(
        <nav className="nav-wrapper navbar-expand-md darken-3 black">
        <div className="container">
              <div className="brand-logo navbar-text" style={{left : "5%"}}>SL</div>
              </div>
         <button className="navbar-toggler right blue icon" data-toggle="collapse" data-target="#collapse_target">
             <span className="navbar-toggler-icon" ></span>
         </button>
          <div className="collapse navbar-collapse right" id="collapse_target">
              <ul className="navbar-nav">
                  <li className="nav-item active"><NavLink className = "link active"  to='/'>Home</NavLink></li>
                  <li className="nav-item "><NavLink className = "link" to='/Projects'>Projects</NavLink></li>
                  <li className="nav-item"><NavLink className = "link" to='/Interests'>Interests</NavLink></li>
              </ul>
         </div>
     </nav>
    );
}
export default Navbar

