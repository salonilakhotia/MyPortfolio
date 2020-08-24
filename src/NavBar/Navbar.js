import React from 'react'
import { NavLink}  from 'react-router-dom'
import './navbar.css';


function Navbar(){

    return(


        <nav className="nav-wrapper navbar-expand-md darken-3 black navbar-static-top">
        <div className="container">
              <div className="brand-logo navbar-text" style={{left : "5%"}}>SL</div>
              </div>
         <button className="navbar-toggler white right icon" data-toggle="collapse" data-target="#collapse_target">
             <span className="icon-bar" ></span>
             <span className="icon-bar" ></span>
             <span className="icon-bar" ></span>
         </button>
          <div className="collapse navbar-collapse right" id="collapse_target">
              <ul className="navbar-nav">
                  <li className="nav-item active"><NavLink className = "link"  to='/'>Home</NavLink></li>
                  <li className="nav-item "><NavLink className = "link" to='/Projects'>Projects</NavLink></li>
                  <li className="nav-item"><NavLink className = "link" to='/Interests'>Interests</NavLink></li>
              </ul>
         </div>
     </nav>
    );
}
export default Navbar
