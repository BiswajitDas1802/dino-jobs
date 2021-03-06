import {
    EMPLOYER_LOGIN_SUCCESS,
    EMPLOYER_REGISTER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./actionTypes"
import {auth} from '../../firebase.js'
import axios from "axios"
//Login actions--------------->

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
}
const loginFailure = () => {
    return {
        type: LOGIN_FAILURE
    }
}
const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}

//LogOut actions--------------->
const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

//Register / Sign-up actions----->

const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    }
}
const registerFailure = () => {
    return {
        type: REGISTER_FAILURE
    }
}
const registerSuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}
const employerRegisterSuccess = (payload) => {
    return {
        type: EMPLOYER_REGISTER_SUCCESS,
        payload
    }
}

const employerLoginSuccess = (payload) => {
    return {
        type: EMPLOYER_LOGIN_SUCCESS,
        payload
    }
}


// Login network request -----> 

const login = ({
    email,
    password
}) => (dispatch) => {
    dispatch(loginRequest())
    return auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            dispatch(loginSuccess(user))
        })
        .catch((error) => {
            dispatch(loginFailure(error.message))
        });
}

// Register network request -----> 
// Update profile network request -----> 

const updateUser = ({
    displayName
}) => (dispatch) => {
    auth.currentUser.updateProfile({
        displayName
    }).then((res) => {
        dispatch(registerSuccess(auth.currentUser))
    }).catch(() => {
        dispatch(registerFailure())
    });
}

const register = ({
    email,
    password,
    ...info
}) => (dispatch) => {
    console.log(email, password)
    dispatch(registerRequest())

    return auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            dispatch(registerSuccess(auth.currentUser))
            updateUser(info)
        })
        .catch(() => {
            dispatch(registerFailure())
        })
}


// Register network request -----> 
const employerRegister = (user) => (dispatch) => {

    dispatch(registerRequest())
    return axios.post("https://ashish-first-server.herokuapp.com/employers", user)

        .then((res) => {
            dispatch(employerRegisterSuccess(res.data))
        })
        .catch(() => {
            dispatch(registerFailure())
        })
}


export {
    register,
    login,
    logoutSuccess,
    registerFailure,
    registerSuccess,
    registerRequest,
    loginFailure,
    loginRequest,
    loginSuccess,
    employerRegister,
    employerLoginSuccess
}