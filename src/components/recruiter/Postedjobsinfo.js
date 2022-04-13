import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Applicant from './Applicant'
import Jobitem from './Jobitem'
import Nojobs from './Nojobs'
import './postedjobsinfo.css'

function Postedjobsinfo() {
    const admin = useSelector(store=>store.auth.admin)
    const isAdmin = useSelector(store=>store.auth.isAdmin)
    const [jobs,setJobs] = React.useState([])
    const [applications,setApplications] = React.useState([])
 
    console.log(applications)
    const handleApplicationDelete=() => {

    }

    const getData = ()=>{
        
        axios.get("https://ashish-first-server.herokuapp.com/job?employerId="+admin.id)
        .then(res=>{
            setJobs(res.data)
          
        })      
        .catch(()=>{
            alert("Something went wrong")
        })
        axios.get("https://ashish-first-server.herokuapp.com/applications?employerId="+admin.id)
        .then(res=>{
            setApplications(res.data)
            
        })
        .catch(()=>{
            alert("Something went wrong")
        })
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(applications)
    console.log(jobs)
   

    return (
        <>
        { jobs.length==0? <Nojobs/>:
        
        <div className="Postedjobsinfo">
            <h1>job listing</h1>
            <div className="joblisting">
                <div className="joblist">
                    <div className="activejobs__header"><p>Current active jobs</p> </div>
                    <div className="active__jobs">
                        {jobs.map(item=><Jobitem  id={item.id} title={item.job_title} type={item.job_type} />)}
                    </div>
                </div>
                <div className="joblist">
                <div className="activejobs__header"><p>Applications</p> </div>
                    <div className="active__jobs">
                    {applications.length? (
                    applications.map(application=><Applicant key={"employerApplication" + application.id } {...application} handleApplicationDelete={handleApplicationDelete}/>)
                ) : <h4>Empty</h4>}
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Postedjobsinfo
