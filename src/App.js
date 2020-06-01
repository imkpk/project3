import React from "react";
import "./App.css";
import Home from "./Pagess/Home";
import Rooms from "./Pagess/Rooms";
import SingleRoom from "./Pagess/SingleRoom";
import Errors from "./Pagess/Errors";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Componentss/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Errors} />
      </Switch>
    </>
  );
}

export default App;

/***
 * * * to render only home page when click the homepage then add exact before patch props like above
 *
 * wrap all <Route /> in <Switch/> which we imported on the top
 *
 * switch wrapper helps that Errors Component will not display on each page because we didnt give the path to it on above
 * / ///
 *
 */
