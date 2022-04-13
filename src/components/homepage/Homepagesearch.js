import React from 'react'
import './homepagesearch.css'

function Homepagesearch() {
    return (
        <div className="homepagesearch" >
            <div className="search__left">
            <div className="search__lefticon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30.849" height="30.849" viewBox="0 0 30.849 30.849" fill="#232323"><defs><style></style></defs><path class="a" d="M32.463,28.179l-7.307-6.215A3.261,3.261,0,0,0,22.94,21,11.57,11.57,0,1,0,21.645,22.3a3.261,3.261,0,0,0,.962,2.216l6.215,7.307a2.592,2.592,0,1,0,3.641-3.641ZM14.139,21.208A7.712,7.712,0,1,1,21.851,13.5a7.712,7.712,0,0,1-7.712,7.712Z" transform="translate(-2.571 -1.928)"/></svg>
            </div>
            <input className="search__leftbar" placeholder="Search Jobs"></input>
            </div>
            <div className="search__right">
                <div className="search__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="31.246" viewBox="0 0 22 31.246" stroke="#e5936b" fill="none"><defs><style></style></defs><path class="a" d="M18,3A10.492,10.492,0,0,0,7.5,13.5C7.5,21.375,18,33,18,33S28.5,21.375,28.5,13.5A10.492,10.492,0,0,0,18,3Zm0,14.25a3.75,3.75,0,1,1,3.75-3.75A3.751,3.751,0,0,1,18,17.25Z" transform="translate(-7 -2.5)"/></svg>
                </div>
                <input className="search__bar" placeholder="Search Loaction"></input>
                <div className="search__button">Search</div>
            </div>
        </div>
    )
}

export default Homepagesearch
