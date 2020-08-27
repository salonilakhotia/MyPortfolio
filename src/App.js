import React, { Component } from 'react';
import './App.css';
import Home from './Home/Home'
import Projects from './Projects/Projects';
import Interests from './Interests/Interest';
import Navbar from './NavBar/Navbar';
import SideDrawer from "./NavBar/SideDrawer/SideDrawer";
import Backdrop from "./NavBar/Backdrop/Backdrop";
import { Route , Switch} from 'react-router-dom';

  
class App extends Component {
  // state = {
  //   sideDrawerOpen:false
  // };

  // backdropClickHandler = () => {
  //   this.setState({sideDrawerOpen:false});
  // };

  // drawerToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {sideDrawerOpen: !prevState.sideDrawerOpen};
  //   });
  // };

  render() {
    // let backdrop;

    // if(this.state.sideDrawerOpen){
    //   backdrop = <Backdrop click={this.backdropClickHandler} />;
    // }
  return (
    <Switch>
    {/* 
     <div style={{height:"100%"}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
     </div> */}

    
      <Route exact path = '/' component={Home} />
      <Route path = '/Projects' component={Projects} />
      <Route path = '/Interests' component={Interests} />
    </Switch>
    );
  }
}

export default App;
