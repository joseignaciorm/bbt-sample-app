import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Protected from "./Routes/Protected";
import Public from "./Routes/Public";
//import GoogleLogin from "./Auth/googleLogin";
//import Login from "./Pages/Login";
import SignIn from "./Auth/SignIn"
import Register from "./Pages/Register";
import DataAppDetail from "./Pages/DataAppDetail";
import DataApp from "./Pages/DataApp";
import Page404 from "./Pages/Page404";
import Header from "./Organisms/Header";
import CreateDataApp from "./Pages/CreateDataApp";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Protected path="/" exact component={Home} />
        <Protected path="/create-data" exact component={CreateDataApp} />
        <Protected path="/data" exact component={DataAppDetail} />
        <Protected path="/data/:id" component={DataApp} />

        <Public path="/login" exact component={SignIn} />
        <Public path="/register" exact component={Register} />

        <Route component={Page404} />
      </Switch>
    </Router>
  )
}


export default AppRoutes
