import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Import de mes composants

import Home from 'src/components/Home';
import MyProfile from 'src/components/MyProfile';
import Training from 'src/components/Training';
import Experiences from 'src/components/Experiences';


const Main = () => (
  <div className="main">
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/my-profile">
        <MyProfile />
      </Route>
      <Route path="/training">
        <Training />
      </Route>
      <Route path="/experiences">
        <Experiences />
      </Route>
    </Switch>
  </div>
);

export default Main;