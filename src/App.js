import React, {Suspense, lazy, Component } from 'react';
import './App.css';

import { Route , Switch} from 'react-router-dom';

  
class App extends Component {
  
  render() {
    const Loader = () => <h1>Loading</h1>;
    const Home = lazy(() => import("./Home/Home"));
    const Projects = lazy(() => import("./Projects/Projects"));
    const Interests = lazy(() => import("./Interests/Interest"));
  return (
    
    <Switch>
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
