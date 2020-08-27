import React from 'react';

import './SideDrawer/DrawerToggleButton';
import './navbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';


const Navbar = props => (
        <header className="bar">
            <nav className="bar__navigation black">
                <div class="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="brand-logo navbar-text" >SL</div>
                <div className="spacer" />
                <div className="bar_navigation-items">
                    <ul>
                        <li><a href="/" className = "link" >Home</a></li>
                        <li><a href="/Projects" className = "link" >Projects</a></li>
                        <li><a href="/Interests" className = "link" >Interests</a></li>
                    </ul>
                </div>
            </nav>
        </header>
);
export default Navbar


/*


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

*/