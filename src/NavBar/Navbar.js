import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <li><NavLink to="/" className = "link active" >Home</NavLink></li>
                        <li><NavLink to="/Projects" className = "link" >Projects</NavLink></li>
                        <li><NavLink to="/Interests" className = "link" >Interests</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
);
export default Navbar

