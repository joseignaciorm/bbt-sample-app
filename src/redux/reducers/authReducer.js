import { LOGIN_ERROR, LOGIN_SUCCESS, CREATE_DATA_APP, CREATE_DATA_ERROR, SIGNOUT_SUCCESS } from "../actions"

const initialStore = {
  projects: [
    {id: 1, title: "Title one",   content: "This is the content"},
    {id: 2, title: "Title Two",   content: "This is the content"},
    {id: 3, title: "Title Three", content: "This is the content"}
  ],
  authError: null
}

export const dataReducer = (state = initialStore, action) => {
  switch (action.type) {
    case CREATE_DATA_APP:
      console.log('Created data', action.data)
      return state;
    case CREATE_DATA_ERROR:
      console.log('Create data error: ', action.err)
      return state;
    default:
      return state;
  }
}

export const authReducer = (state = initialStore, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log("Login error")
      return {
        ...state,
        authError: "Login failed"
      }
    case LOGIN_SUCCESS:
      console.log("Login success")
      return {
        ...state,
        authError: null
      }
    case SIGNOUT_SUCCESS:
      console.log("Signout success")
      return state
    default:
      return state;
  }
}

export const signinReducer = (state = {}, action) => {
  return state
}


export const signupReducer = (state = {}, action) => {
  return state
}


export const logoutReducer = (state = {}, action) => {
  return state
}
