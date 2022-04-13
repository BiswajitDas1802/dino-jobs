import React from 'react'
import './jobitem.css'

function Jobitem({title,type,id}) {
    return (
        <div className="jobitem">
            <div className="item__header">
                <div className="job__id">Job ID : {id}</div>
                <div className="dlt__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#E5936B"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
                </div>
            </div>
            <div className="item__title">
                <h3>Job Title:</h3>
                <p>{title}</p>
            </div>
            <div className="item__title">
                <h3>Job Type:{}</h3>
                <p>{type}</p>
            </div>
            
           
        </div>
    )
}

export default Jobitem
