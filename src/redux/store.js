import { combineReducers, createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { reduxFirestore ,getFirestore, firestoreReducer } from "redux-firestore"
import { reactReduxFirebase ,getFirebase, firebaseReducer } from "react-redux-firebase"
import fbConfig from "../config/fbConfig"
import { 
  dataReducer, 
  signinReducer, 
  signupReducer, 
  logoutReducer, 
  authReducer
} from "./reducers/authReducer"



export default createStore(
  combineReducers( 
    {
      authReducer,
      dataReducer, 
      signinReducer, 
      signupReducer, 
      logoutReducer,
      firestoreReducer,
      firebaseReducer
    }
  ),
  compose(
        composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
      )
    )
  )
