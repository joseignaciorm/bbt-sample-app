import React, { Component } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import firebase from "firebase";
//import * as firebase from "firebase/app";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "firebase/auth";
import firebaseConfig from "../Firebase/firebase";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Login extends Component {
  state = {
    isSignedIn: false,
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    const authObserver = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      //console.log("User verified: ", user.emailVerified);
      if (this.state.isSignedIn) {
        localStorage.setItem('Login', true)
      } else {
        localStorage.setItem('Login', false)
      }
      
    });
  };
  render() {
    return (
      <Container>
        {!this.state.isSignedIn ? (
          <Modal.Dialog className="text-center">
            <Modal.Header className="justify-content-md-center">
              <Modal.Title>Welcome to Beep Beep Technology</Modal.Title>
            </Modal.Header>

            <Modal.Body>Enter to our amazing data application.</Modal.Body>

            <Modal.Footer className="justify-content-md-center">
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </Modal.Footer>
          </Modal.Dialog>
        ) : (
          <div>
            <p>Is signed in</p>
            <Button onClick={() => firebase.auth().signOut()}>Sign out!</Button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          </div>
        )}
      </Container>
    );
  }
}

export default Login;
