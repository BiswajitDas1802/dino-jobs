import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { authReducer } from "./auth/authReducer";
import { jobReducer } from "./job/jobReducer";



const reducer = combineReducers({
    auth :authReducer,
 
    job :jobReducer
    
})



    const store = createStore(reducer,
        compose(applyMiddleware(thunk),
        
        )) 


export default store    