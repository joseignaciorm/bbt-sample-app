import React from "react";
import { Route, Redirect } from "react-router-dom";
//import withLogin from "../HOC/withLogin"
import { connect } from "react-redux"

const Protected = ({ component: Component, ...rest }) => {
  const { auth } = rest
  const userLogged = auth.uid
  console.log(userLogged)

  if (!userLogged) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} component={Component} />;
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebaseReducer.auth
  }
}
export default connect(mapStateToProps)(Protected);
