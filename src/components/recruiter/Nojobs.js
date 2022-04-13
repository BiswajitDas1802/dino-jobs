import React from 'react'
import './nojobs.css'
import nojobs from '../../svgimgs/hatash.png'
import { Link } from 'react-router-dom'

function Nojobs() {
    return (
        <div className="nojobs">
            <div className="nojobs__card">
                <img src={nojobs}></img>
                <h1>No Jobs Posted Yet!!</h1>
              
                <button className="nojobs__btn"> <a href="/employer/postjob">Post new job!</a></button>
            </div>
        </div>
    )
}

export default Nojobs
