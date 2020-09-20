import React, {Suspense, lazy, Component } from 'react';
import './App.css';

// import Home from './Home/Home'
// import Projects from './Projects/Projects';
// import Interests from './Interests/Interest';
// import Navbar from './NavBar/Navbar';
// import SideDrawer from "./NavBar/SideDrawer/SideDrawer";
// import Backdrop from "./NavBar/Backdrop/Backdrop";
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
    const Loader = () => <h1>Loading</h1>;
    const Home = lazy(() => import("./Home/Home"));
    const Projects = lazy(() => import("./Projects/Projects"));
    const Interests = lazy(() => import("./Interests/Interest"));
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
    
    
      <Route exact path = '/' component={() => (
         <Suspense fallback={<Loader />}>
            <Home />
          </Suspense> 
      )} />
      <Route path = '/Projects' component={() => (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        )} />
      <Route path = '/Interests' component={() => (
          <Suspense fallback={<Loader />}>
            <Interests />
          </Suspense>
        )} />
    </Switch>
    );
  }
}

export default App;
