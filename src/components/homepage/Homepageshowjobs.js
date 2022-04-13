import React from 'react'
import './homepageshowjobs.css'
import Jobcard from './Jobcard'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Homepageshowjobs() {

    const [data, setData] = useState([])
    useEffect(() => {
       axios.get('https://ashish-first-server.herokuapp.com/job')
       .then((response) =>setData(response.data))
    }, [data])

    return (
        <div className="homepageshowjobs">
            <div className="showjobs__header">
                <div className="header__left">Find a job that you love!!</div>
                {/* <div className="header__right"><p>see all jobs</p></div> */}
            </div>
            <div className="showjobs__body">
            {data?.map(item =><Jobcard location={item.location} about={item.about} experience={item.experience} job_title={item.job_title} salary={item.max_salary} description={item.description} id={item.id} company={item.company_name} skills={item.skills} job_type={item.job_type}/>)}
            </div>
        </div>
    )
}

export default Homepageshowjobs
