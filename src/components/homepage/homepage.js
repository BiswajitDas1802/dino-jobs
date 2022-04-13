import React from 'react'
import Homepageland from './homepageland'
import './homepage.css'
import Homepagesearch from './Homepagesearch'
import Homepageslider from './Homepageslider'
import Homepageshowjobs from './Homepageshowjobs'
import Midpage from './midpage'
import Footer from './footer'
import Navbar from './Navbar'

function Homepage() {
    return (
        <div className="homepage">
            {/* <Navbar/> */}
            <Homepageland/>
            <Homepagesearch/>
            <Homepageslider/>
            <Homepageshowjobs/>
            <Midpage/>
            <Footer/>
        </div>
    )
}

export default Homepage
