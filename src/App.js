import React from 'react';
import './App.css';
import Home from './Home/Home'
import Projects from './Projects/Projects';
import Interests from './Interests/Interest';
import NavBar from './NavBar/Navbar';
import { BrowserRouter, Route , Switch} from 'react-router-dom';

  
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
    </Switch>

    </BrowserRouter>
    
    );
}

export default App;
