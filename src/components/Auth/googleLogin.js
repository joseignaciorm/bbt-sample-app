import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Firebase/firebase";

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

class GoogleLogin extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;

    return (
      <div className="ed-grid">
        <div>
          {user ? <p>Hello, {user.displayName}</p> : <p>Please, sign in</p>}
          {user ? (
            <button className="button" onClick={signOut}>
              Sign out
            </button>
          ) : (
            <button className="button" onClick={signInWithGoogle}>
              Sign in with google
            </button>
          )}
        </div>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(GoogleLogin);
