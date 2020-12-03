import React from "react";
import { Route, Switch } from "react-router-dom";
import GameIndex from "../Views/gameIndex";
import GameShow from "../Views/game"
import Home from "../Views/home";
import Profile from "../Views/profile";

const Router = () => {
  return(
    <div className="custom-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route exact path="/games" component={GameIndex} />
      <Route path="/games/:id" component={GameShow} />
    </Switch>
    </div>
  )
}

export default Router;