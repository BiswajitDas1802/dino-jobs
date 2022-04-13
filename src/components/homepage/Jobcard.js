import { makeStyles, Modal, Paper } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router";
import { AppContext } from "../../Context/AppCotext";

import "./jobcard.css";

const useStyles = makeStyles((theme) => ({
  paperRight: {
    height: "600px",
    width: "50%",
    minWidth: "700px",
    paddingButtom:"1rem",
    overflowY:"scroll",
    overflowX:"hidden",
    // minHeight:"30vw",
    position: "absolute",
    marginLeft: "20%",
    marginRight: "25%",
    marginTop: "3%",
    borderRadius: "10px",
  },
 
}));

function Jobcard({ location, about,company, id,experience, job_title, job_type,description,skills,salary,employerId }) {
  function trunket(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  const{ employee,setEmployee,jobpost, setjobpost}=useContext(AppContext)
  const {isAuth} = useSelector(store=>store.auth)
  const classes = useStyles();
  const [data,setData]=React.useState()
  const [state, setstate] = useState(false)
//  const jobs = useSelector(store=>store.job.jobs)
 const userEmail = useSelector(store=>store.auth.userData.email)
const userName = useSelector(store=>store.auth.userData.displayName)
   const history = useHistory()
  console.log(data )
  const login = (e) => {
    
    setjobpost(false)
    setEmployee(true);
  };
  // const config=(itemid)=>{
   
  //   axios.get("https://ashish-first-server.herokuapp.com/job/"+itemid)
  //   .then((res)=>{
  //     // console.log(res.data)
  //     setjobpost(true)
  //     setData({...res.data})
  //   })
  //  .catch((err)=>(err))   
  // }

   const handleApply=(e)=>{
   
      const application ={
        employerId : employerId,
        job_title : job_title,
        applyed_date : new Date,
        job_id : id,
        applicantName: userName,
        applicantEmail : userEmail,
        status : false
      }
    axios.post("https://ashish-first-server.herokuapp.com/applications",application)
    .then(()=>{
      e.target.innerText = "Applied"
      e.target.style.background = "green"
      e.target.disabled = true;
      // setTimeout(()=>{
        history.push("/")
      // },1000)
    })
    .catch(()=>{
      alert("Something wmt wrong")
    })
   }
 

  return (
    <>
      <div className="jobcard">
        <div className="jobcard__header">
          <div className="cardheader__1">
            <div className="card__locationlogo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.545"
                height="27.556"
                viewBox="0 0 19.545 27.556"
                fill="none"
                stroke-width="2px"
                stroke="#e5936b"
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  class="a"
                  d="M16.273,3A8.766,8.766,0,0,0,7.5,11.773c0,6.579,8.773,16.292,8.773,16.292s8.773-9.713,8.773-16.292A8.766,8.766,0,0,0,16.273,3Zm0,11.906a3.133,3.133,0,1,1,3.133-3.133A3.134,3.134,0,0,1,16.273,14.906Z"
                  transform="translate(-6.5 -2)"
                />
              </svg>
            </div>
            <div className="card__location">{(location[0], location[1])}</div>
          </div>
          <div className="cardheader__2">
            <p>Full-Time</p>
          </div>
        </div>
        <div className="jobcard__desc">
          <div className="desc__head">{job_title}</div>
          <div className="desc__desctag">Job description</div>
          <div className="desc__desc">{trunket(about, 200)}</div>
        </div>
        <div className="jobcard__bottom">
          <div className="exp">
            <div className="eyeballsvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.5"
                height="21.234"
                viewBox="0 0 31.5 21.234"
                fill="#e5936b"
              >
                <defs>
                  <style></style>
                </defs>
                <path
                  class="a"
                  d="M18,7.383A16.936,16.936,0,0,0,2.25,18a16.991,16.991,0,0,0,31.5,0A16.936,16.936,0,0,0,18,7.383Zm0,17.7A7.081,7.081,0,1,1,25.158,18,7.139,7.139,0,0,1,18,25.08Zm0-11.327A4.247,4.247,0,1,0,22.3,18,4.285,4.285,0,0,0,18,13.753Z"
                  transform="translate(-2.25 -7.383)"
                />
              </svg>
            </div>
            <div className="work__exp">{experience}</div>
            <div className="experience">Experience</div>
          </div>
          <button
            className="apply__button"
            button
            onClick={()=>setstate(true)}
          >
            view
          </button>
        </div>
      </div>
      <div className="popup"></div>
      <Modal open={state} >
        <Paper className={classes.paperRight}>
          <div className="detailed__view">
            <div className="detailed__header">
              <div className="header__id">ID: <span>{id}</span></div>

              <div className="header__location">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.545"
                  height="27.556"
                  viewBox="0 0 19.545 27.556"
                  fill="none"
                  stroke-width="2px"
                  stroke="#e5936b"
                >
                  <defs>
                    <style></style>
                  </defs>
                  <path
                    class="a"
                    d="M16.273,3A8.766,8.766,0,0,0,7.5,11.773c0,6.579,8.773,16.292,8.773,16.292s8.773-9.713,8.773-16.292A8.766,8.766,0,0,0,16.273,3Zm0,11.906a3.133,3.133,0,1,1,3.133-3.133A3.134,3.134,0,0,1,16.273,14.906Z"
                    transform="translate(-6.5 -2)"
                  />
                </svg>
                {(location[0], location[1])}
            
              </div>
              <div className="header__fulltime">Full Time</div>
             
            </div>
            
            <div className="detailed__name">
            <h3>JobRole :   <span> {job_title}</span></h3>
            <h3>Company Name :  <span> {company}</span></h3>
            </div>
            <div className="detailed__desc">
            
              <div className="desc__skill">
              <h4>Skills :  {skills.map(el=><span>{el}, </span>)} </h4>
               
            
              </div>
              <div className="desc__skill">
              <h4>Experience  : <span> {experience}</span></h4>
             
              </div>
              <div className="desc__skill">
              <h4>Job type :<span> {job_type}</span> </h4>
              </div>
              <div className="desc__skill">
              <h4>Salary :<span> {salary}</span> </h4>
              </div>
              <div className="desc__job">
              <h4>About Company :</h4>
              <p>{about}</p>
              
              </div>
              <div className="desc__job">
              <h4> Job description: </h4>
              <p>{description.map(item=><>{item}</>)}</p>
              </div>
            
              <div className="desc__"></div>
            </div>
            <div className="detailed__button">
              <button onClick={() => setstate(false)}>close</button>
            {!isAuth? <button onClick={(e)=>login(e)}>Login to Apply</button>
              :<button onClick={handleApply}>Apply</button>}
            </div>
          </div>
        </Paper>
      </Modal>
         
    
    </>
  );
}

export default Jobcard;