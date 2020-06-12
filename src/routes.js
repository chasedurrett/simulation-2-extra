import React from 'react'
import { Switch, Route } from "react-router-dom";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Wizard from "../src/components/Wizard/Wizard";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/wizard" component={Wizard} />
  </Switch>
);
