import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Protected from "./Routes/Protected";
import Public from "./Routes/Public";
import GoogleLogin from "./Auth/googleLogin";
import Register from "./Pages/Register";
import DataApp from "./Pages/DataApp";
import Data from "./Pages/Data";
import Page404 from "./Pages/Page404";

const App = () => (
  <Router>
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/data" exact component={DataApp} />
      <Protected path="/data/:id" component={Data} />

      <Public path="/login" exact component={GoogleLogin} />
      <Public path="/register" exact component={Register} />

      <Route component={Page404} />
    </Switch>
  </Router>
);

export default App;
