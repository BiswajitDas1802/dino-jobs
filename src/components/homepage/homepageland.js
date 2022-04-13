import React from 'react'
import './homepageland.css'
import landpng from '../../svgimgs/landddd.png'
import Navbar from './Navbar'

function Homepageland() {
    return (
        <>
       
       
        <div className="homepageland">
            
            {/* <div className="homepageland__left"></div>
            <div className="homepageland__right">
                 
            </div>*/}
            <img src={landpng}></img>
        </div>
        </>
    )
}

export default Homepageland
