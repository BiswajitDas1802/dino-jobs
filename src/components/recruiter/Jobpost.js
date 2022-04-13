import './jobpost.css'
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { Link } from '@material-ui/core'

const init = {
    job_title : "",
    job_type : "",
    experience : "",
    min_salary : "",
    skills : "",
    Role : "",
    location  : "",
    description : ""
}

function Jobpost() {
    const [job,setJob] = useState(init)
    const history = useHistory()
    const employerId = useSelector(store=>store.auth.admin.id)
    const isAdmin = useSelector(store=>store.auth.isAdmin)
    const {job_title,job_type,experience,min_salary,skills,Role,description,location,walk_in} = job;
    const handleChange = (e)=>{
        const {name,value,type,checked} = e.target
      let val=  type !== "checkbox"? value : checked;
      setJob({...job,[name] : val})
    }
    const processJob = (job)=>{
            const newJob = {...job,employerId}
            newJob.skills = job.skills.split(" ")
            newJob.location = job.location.split(" ")
            newJob.description = job.description.split("\n")
            return newJob
    }
    console.log(job,employerId)
    const handlePost =(e)=>{
        e.preventDefault()
    
        const data = processJob(job)

        axios.post("https://ashish-first-server.herokuapp.com/job",data)
        .then((res)=>{
            
        
            setJob(init)
            history.push("/employer")
        })
        .catch(()=>{
            alert("something went wrong")
        })
    }
    return isAdmin? (
        <div className="jobpost">
            <div className="colordiv"></div>
            <form className="postjobs__input"  onSubmit={handlePost} >
                <div className="input__left">
                <input type="text" name="job_title" placeholder="Job Title" value={job_title} onChange={handleChange} />
                <input type="text" name="job_type" placeholder="Job Type" value={job_type} onChange={handleChange} />
                <input type="text" name="experience" placeholder="Experience" value={experience} onChange={handleChange} />
                <input type="number" name="min_salary" placeholder="Min Salary" value={min_salary} onChange={handleChange} />
                
                </div>
                <div className="input__right">
                <input type="text" name="skills" placeholder="Skills" value={skills} onChange={handleChange} />
                <input type="text" name="Role" placeholder="Role" value={Role} onChange={handleChange} />
                <input type="text" name="location" placeholder="Locations" value={location} onChange={handleChange} />
                <input type="date" name="walk_in" placeholder="walk in Date" value={walk_in} onChange={handleChange}/>
                </div>
                <div className="job__description">
              
                <textarea className="post__des" type="text" cols="93" rows="4" name="description" placeholder="Description" value={description} onChange={handleChange} />
                <div className="submit__btn">
                    <button type="submit" className="btn1">POST</button>
            <a href="/employer"><button className="btn2">Cancel</button></a>
                 
                </div>

                </div>
            </form>
        </div>
    ) : <Redirect to= "/" />
}

export default Jobpost
