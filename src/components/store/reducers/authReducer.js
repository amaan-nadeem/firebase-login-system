import { combineReducers } from "redux"
const initState = {
    authError: null
}
const authReducer = (state = initState, action) =>{
    switch(action.type){
        case "LOGIN_SUCCESS":
            console.log("Login reducer fired")
            return {
                ...state,
                authError: 'login Success'
            }
        case "LOGIN_ERROR":
            console.log("Login error reducer fired")
            return {
                ...state,
                authError: action.err.message
            }
        case "SIGNOUT_SUCCESS":
            console.log("Signout reducer fired")
            return state
        case "SIGNUP_SUCCESS":
            console.log("SIGN UP reducer fired")
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            console.log("SIGN Error reducer fired")
            return {
                ...state,
                authError: action.err.message
            }
        default: 
        return state
    }
}

export default authReducer;