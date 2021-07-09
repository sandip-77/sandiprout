import React from 'react'
import Topbar from './components/Topbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ThankYou from './screens/ThankYou';
import ProjectScreen from './screens/ProjectScreen';
import SingleProject from './screens/SingleProject';

const App = () => {
  return (
    <div>
    <Router>
          <Topbar/>
      <Switch>
        <Route exact path="/"> <HomeScreen/> </Route>
        <Route path="/about"> <AboutScreen/> </Route>
        <Route path="/contact"> <ContactScreen/> </Route>
        <Route path="/message"> <ThankYou/> </Route>
        <Route path="/projects"> <ProjectScreen/> </Route>
        <Route path="/project/ecom_app"> <SingleProject/> </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App

