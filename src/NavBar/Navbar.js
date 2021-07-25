import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideDrawer/DrawerToggleButton';
import './navbar.css';
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import Saloni from "./Saloni.png";

const Navbar = props => (
        <header className="bar">
            <nav className="bar__navigation black">
                <div class="toolbar__toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="brand-logo" ><img className="LOGO" src={Saloni}></img></div>
                <div className="spacer" />
                <div className="bar_navigation-items">
                    <ul>
                        <li><NavLink to="/" className = "link active" >Home</NavLink></li>
                        <li><a href="https://drive.google.com/drive/u/0/folders/1Z0yIy02gTHdFH7HGX_UsmiWyDga7DdZO" className = "link"> Resume</a></li>
                        <li><NavLink to="/Interests" className = "link" >Gallery</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
);
export default Navbar

