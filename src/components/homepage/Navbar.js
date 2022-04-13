import {  makeStyles, Modal, Paper } from '@material-ui/core'
import axios from 'axios'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
 import { Link, Redirect, useHistory } from 'react-router-dom'
import { useState } from 'react';
import './navbar.css'
import logo from '../../svgimgs/newlogo.png'
import { auth } from '../../firebase';
import { useRef } from 'react';
import EmployerSingUp from './Signuprecpop';
import { employerLogin, employerLoginSuccess, loginFailure, loginRequest, loginSuccess, logoutSuccess, registerFailure, registerRequest, registerSuccess } from '../../redux/auth/actions.js';
import firebase from "firebase/app"
import logout from '../../svgimgs/logout.png';
import { AppContext, AppContextProvider } from '../../Context/AppCotext'


import { Backdrop } from '@material-ui/core'

const init = {
    email :"",
    password : ""
}

const useStyles = makeStyles((theme) => ({

    

    paperRight: {
        width:"30vw",
        height:"400px",
        minWidth:"400px",
        position:"absolute",
        marginLeft:"35%",
        marginTop:"10%",
        borderRadius:"10px",
        margin:"auto",
        
    },
      paperLeft: {
       
        width:"30%",
        minWidth:"500px",
        position:"absolute",
        marginLeft:"30%",
        marginRight:"40%",
        marginTop:"5%",
        overflowY:"scroll",
        overflowX:"hidden",
      },
      recpage:{
        width:"40%",
        minWidth:"600px",
        minHeight:"600px",
        position:"absolute",
        marginLeft:"30%",
        marginRight:"40%",
        marginTop:"5%",
        // overflowY:"scroll",
        // overflowX:"hidden",  
      }

  }));

function Navbar() {       
    const [user,setUser] = React.useState(init)
    const dispatch = useDispatch()
     const history = useHistory()
    const {isAdmin,isAuth,admin,userData} = useSelector(store=>store.auth)
    const handleChange =(e)=>{
        const {name,value} = e.target
        setUser({...user,[name]: value})
    }
    console.log(isAuth,isAdmin,admin,userData)
    const handleLogin=()=>{
        dispatch(loginRequest())
        axios.get("https://ashish-first-server.herokuapp.com/employers?"+"email="+user.email+"&&" + "password="+user.password)
        .then((res)=> {
            const user = res.data[0]
            if(user){
                dispatch(employerLoginSuccess(user))
                 history.push("/employer")
                console.log(user)
                setRecruiter(false)
            } else{
                alert("User not found")
            }
        })
        .catch((error) => {
            dispatch(loginFailure(error.message))
        });
        
    }
   
    const [recruiter, setRecruiter] = useState(false)
    const [signpopreq, setSignpop] = useState(false)
    const classes= useStyles();
     const{ employee,setEmployee}=useContext(AppContext)

    const handleopenEmployee=()=>{
        setEmployee(true)
    }

    const openRecuiter =()=>{
        setEmployee(false)
        setRecruiter(true)
    }

    const openEmployee =()=>{
        setRecruiter(false)
        setEmployee(true)
    }

    const signuppopUp =()=>{
        setSignpop(true)
    }

    const handleGoogleSignUp =()=>{
        dispatch(registerRequest())
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then((result) => {
           const user = result.user;
      
          dispatch(registerSuccess(user))
        //   history.push("/login")
        setEmployee(false)
        }).catch((error) => {
          dispatch(registerFailure(error.message))
  
        });
      
      }

      const handleGoogleSignIn =()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
        .then((result) => {
           const user = result.user;
      
          dispatch(loginSuccess(user))
        //   history.push("/")
          setEmployee(false) 
        }).catch((error) => {
          dispatch(loginFailure(error.message))
        });
      
      }
      const userhomecomming = ()=>{
        history.push("/employer")
      }
    
    const handleLogout=()=>{
        dispatch(logoutSuccess())
       
    }

    return (
        <>{!isAdmin&& !isAuth&&
        <div className="navbar">
            <div className="navbar__left">
                
                <button className="navbar__reclogin" onClick={()=>setRecruiter(true)}>Login As Recruter</button>
            </div>
            <div className="navbar__center">
                <div>
            <img className="navbar__logo" src={logo} alt="/" ></img>
            </div>
            </div>
            <div className="navbar__right">
                <button className="navbar__reclogin" onClick={handleopenEmployee}>Login As Aspirant</button>
            </div>
            {/* <img src={logout} className="logout__btn" onClick={handleLogout}></img> */}
        </div>
        }
        {isAdmin&&<div className="navbar__login">
            {/* <div className="navbar__left">
                <div className="navbar__postajob">post a job </div>
                <button className="navbar__reclogin" onClick={()=>setRecruiter(true)}>login as recruter</button>
            </div> */}
            {/* <div></div> */}
            <div className="navbar__dinologin">
                <div className="navbar__image">
            <img onclick={userhomecomming}   className="navbar__logo2" src={logo} alt="/" ></img>
            </div>
            </div>
            <div className="navbar__profile">
                <button className="navbar__postajob"><a href="/employer/postjob">Post job</a></button>
                <button className="navbar__name" >{admin.name}</button>
            </div>
            <img src={logout} className="logout__btn" onClick={handleLogout}></img>
        </div>
        }
         {isAuth&&<div className="navbar__login">
           
            <div className="navbar__dinologin">
                <div className="navbar__image">
            <img className="navbar__logo2" src={logo} alt="/" ></img>
            </div>
            </div>
            <div className="navbar__profile">
                <img src={userData.photoURL}></img>
                <button className="navbar__name">{userData.displayName}</button>
            </div>
            <img src={logout} className="logout__btn" onClick={handleLogout}></img>
        </div>
        }
        
        
        <Modal open={employee}  
        onClose={()=>setEmployee(false)}
        >
        <Paper className={classes.paperRight}>
        <>
        <div className="login__aspirant">
            <div className="login__header">
                <h1>Hello!</h1>
                <p>You are just a step away from your dream job</p>
            </div>
            <div className="login__button" >
                <div className="login__btn"  onClick={handleGoogleSignIn} >
                    <img className="google__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"></img>
                    <div> Login With Google</div>
                </div>
                <div>or</div>
                <div className="signup__btn"  onClick={handleGoogleSignUp} >
                    <img className="google__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"></img>
                    <div> SignUp With Google</div>
                </div>
            </div>
        </div>
        <div className="change__to">
            <button onClick={openRecuiter} className="to__rec"  >
         
                Login as Recruiter</button>
            <button onClick={()=>setEmployee(false)} className="cancel">Cancel</button>
        </div>
        </>
        {/* { signpopemp&&<Signupemployee popup={setSignpopemp}/>} */}
        </Paper>
      </Modal>
      
      <Modal open={recruiter}  
        onClose={()=>setRecruiter(false)}
        >
        <Paper className={classes.paperLeft}>
            {!signpopreq&&<>
                <div className="login__aspirant">
            <div className="login__header">
                <h1>Hello!</h1>
                <p>You are just a step away from your dream job</p>
            </div>
            <div className="login__input">
                <div>
                    <img src="" alt="" />
                    <input  className="input__field" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange}/>
                </div>
                <div>
                    <img src="" alt="" />
                    <input   className="input__field" type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange}/>
                </div>
            </div>
            <div className="login__button">
                <button className="login__btn" onClick={handleLogin} >Login</button>
                <div>or</div>
                <button className="signup__btn" onClick={signuppopUp}>New to Dino? SignUp</button>
            </div>
        </div>
        <div className="change__to">
            <button onClick={openEmployee} className="to__rec">Login as Aspirant</button>
            <button onClick={()=>setRecruiter(false)} className="cancel">Cancel</button>
        </div>
            </>}
            { signpopreq&&
            <Modal className={classes.recpage} popup={setSignpop} open={recruiter}
            onClose={()=>setRecruiter(false)}
            >
            <EmployerSingUp />
            </Modal>
            }
       
        </Paper>
      </Modal>
        </>
    )
}

export default Navbar
