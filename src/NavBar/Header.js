import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar';
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";


  
class Header extends Component {
    
  state = {
    sideDrawerOpen:false
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  
  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
  return (
     <div style={{height:"100%"}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
     </div>
    );
  }
}

export default Header;
