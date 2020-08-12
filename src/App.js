import React from 'react';
import './App.css';
import Home from './Home/Home'
import Projects from './Projects/Projects';
import Interests from './Interests/Interest';
import Photos from './Photos/Photos';
import AboutMe from './AboutMe/AboutMe';
import NavBar from './NavBar/Navbar';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import Achievements from './Achievments/Achievements';


function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
     
    </div>
    <Switch>
      <Route exact path = '/' component={Home} />
      <Route path = '/Projects' component={Projects} />
      <Route path = '/Interests' component={Interests} />
      <Route path = '/Photos' component={Photos} />
      <Route path = '/AboutMe' component={AboutMe} />
      <Route path = '/Achievements' component={Achievements} />
    </Switch>
    </BrowserRouter>
    
    );
}

export default App;
