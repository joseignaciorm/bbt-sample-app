import { CREATE_DATA_APP, CREATE_DATA_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, SIGNOUT_SUCCESS } from "./actions"

const createData = data => {

  return (dispatch, getState, { getFirestore, getFirebase }) => {
    // make async call to database
    const firestore = getFirestore()
    firestore.collection('projects').add({
      ...data,
      authorFirstName: "Nacho",
      authorLastName: "RM",
      authorId: 123456,
      createdAt: new Date()
    }).then(() => { 
      dispatch({ type: CREATE_DATA_APP, data })
    }).catch((err) => {
      dispatch({ type: CREATE_DATA_ERROR, err })
    })
    
  }
}

const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase() // Instance of firebase

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: LOGIN_SUCCESS })
    }).catch((err) => {
      dispatch({ type: LOGIN_ERROR, err })
    })
  }
}

const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase.auth().signOut().then(() => {
      dispatch({ type: SIGNOUT_SUCCESS })
    })
  }
}

export { createData, signIn, signOut }
