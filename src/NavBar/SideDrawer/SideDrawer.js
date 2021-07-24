import React from 'react';
import "./SideDrawer.css";
import { NavLink } from 'react-router-dom';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return(
        <nav className={drawerClasses} >
            <ul>
            <li><NavLink to="/" className = "link active" >Home</NavLink></li>
                        <li><a href="https://drive.google.com/drive/u/0/folders/1Z0yIy02gTHdFH7HGX_UsmiWyDga7DdZO" className = "link" >Resume</a></li>
                        <li><NavLink to="/Interests" className = "link" >Gallery</NavLink></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;
