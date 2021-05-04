import React from 'react'
import './App.css';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import AreYouRobot from './components/AreYouRobot';
import InputName from './components/InputName';
import MyIntro from './components/MyIntro';
import MySkills from './components/MySkills';
import MyWorks from './components/MyWorks';


import Home from './components/Home';

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path = '/' exact component = {Home} />
        <Route path = '/input-name' exact component = {InputName} />
        <Route path = '/are-u-robot' exact component = {AreYouRobot} />

        <Route path = '/my-intro' exact component={MyIntro} />

        <Route path = '/my-skills' component= {MySkills} />
        <Route path= '/my-works' exact component ={MyWorks} />

    </Switch>
    </BrowserRouter>
  
  );
}

export default Routes;
