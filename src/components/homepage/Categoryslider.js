import React from 'react'
import './categoryslider.css'

function Categoryslider() {
    return (
        <div className="category">
        <div className="categoryitem">
            <div className="category__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="80.175" height="75.458" viewBox="0 0 80.175 75.458" fill="#e5936b"><defs><style></style></defs><path class="a" d="M77.786,42.445H42.814L66.1,65.735a2.365,2.365,0,0,0,3.27.1,35.3,35.3,0,0,0,10.778-20.76,2.362,2.362,0,0,0-2.367-2.631Zm-2.333-9.55A35.455,35.455,0,0,0,42.563.006a2.372,2.372,0,0,0-2.476,2.388V35.371H73.066a2.37,2.37,0,0,0,2.386-2.476Zm-42.439,9.55V7.473a2.362,2.362,0,0,0-2.629-2.367A35.345,35.345,0,0,0,.021,41.32c.643,18.885,16.9,34.372,35.8,34.135a35.1,35.1,0,0,0,19.935-6.489,2.342,2.342,0,0,0,.231-3.549Z" transform="translate(0 0)"/></svg>
            </div>
            <div className="category__name">Marketing</div>
            <div className="category__vacancy">1400jobs</div>
        </div>
        <div className="categoryitem">
            <div className="category__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="61.367" height="58.696" viewBox="0 0 61.367 58.696" fill="#e5936b"><defs><style></style></defs><path class="a" d="M31.713,1.5.72,28.238H8.391V60.2H54.416V28.238h7.671Zm11.2,35.683H33.96V52.642l-.059-.113H27.8l-.229.113V37.187H19.9V32.074h7.671V20.567H33.96V32.074H42.91v5.114Z" transform="translate(-0.72 -1.504)"/></svg>
            </div>
            <div className="category__name">Architecture</div>
            <div className="category__vacancy">1400jobs</div>
        </div>
        <div className="categoryitem">
            <div className="category__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="67.134" height="50.351" viewBox="0 0 67.134 50.351" fill="#e5936b"><defs><style></style></defs><path class="a" d="M31.329,34.145l.056-8.94-7.469,4.5m11.883-4.5-.042,8.923,7.46-4.5m-7.46,4.512v-.011l-.011.006M67.126,8.948A4.458,4.458,0,0,0,62.658,4.5H4.476A4.465,4.465,0,0,0,0,8.948V50.4a4.46,4.46,0,0,0,4.476,4.448H62.658A4.465,4.465,0,0,0,67.134,50.4V8.948h-.008Zm-18,26.686h-.039a2.978,2.978,0,0,1-2.937,2.979l.1-.045H20.881A2.979,2.979,0,0,1,17.944,35.6H17.93V23.745h.028a2.957,2.957,0,0,1,2.89-2.965H46.191a3.015,3.015,0,0,1,2.937,2.985V35.636Z" transform="translate(0 -4.5)"/></svg>
            </div>
            <div className="category__name">IT</div>
            <div className="category__vacancy">1400jobs</div>
        </div>
        <div className="categoryitem">
            <div className="category__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="105" height="66" viewBox="0 0 105 66" fill="#e5936b" fontWeight="700" fontFamily="Roboto-Bold, Roboto" fontSize="55px"><defs><style></style></defs><text class="a" transform="translate(0 52)"><tspan x="0" y="0">&lt; / &gt;</tspan></text></svg>
            </div>
            <div className="category__name">Developer</div>
            <div className="category__vacancy">1400jobs</div>
        </div>
        <div className="categoryitem">
            <div className="category__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="58.893" height="67.307" viewBox="0 0 58.893 67.307" fill="#e5936b"><defs><style></style></defs><path class="a" d="M57.316,63.1H54.687V3.155A3.155,3.155,0,0,0,51.532,0H7.362A3.155,3.155,0,0,0,4.207,3.155V63.1H1.577A1.578,1.578,0,0,0,0,64.677v2.629H58.893V64.677A1.578,1.578,0,0,0,57.316,63.1ZM16.827,9.991A1.578,1.578,0,0,1,18.4,8.413h5.258A1.578,1.578,0,0,1,25.24,9.991v5.258a1.578,1.578,0,0,1-1.577,1.577H18.4a1.578,1.578,0,0,1-1.577-1.577Zm0,12.62A1.578,1.578,0,0,1,18.4,21.033h5.258a1.578,1.578,0,0,1,1.577,1.577v5.258a1.578,1.578,0,0,1-1.577,1.577H18.4a1.578,1.578,0,0,1-1.577-1.577Zm6.836,19.456H18.4a1.578,1.578,0,0,1-1.577-1.577V35.231A1.578,1.578,0,0,1,18.4,33.653h5.258a1.578,1.578,0,0,1,1.577,1.577v5.258A1.578,1.578,0,0,1,23.662,42.067ZM33.653,63.1H25.24V52.057a1.578,1.578,0,0,1,1.577-1.577h5.258a1.578,1.578,0,0,1,1.577,1.577Zm8.413-22.611a1.578,1.578,0,0,1-1.577,1.577H35.231a1.578,1.578,0,0,1-1.577-1.577V35.231a1.578,1.578,0,0,1,1.577-1.577h5.258a1.578,1.578,0,0,1,1.577,1.577Zm0-12.62a1.578,1.578,0,0,1-1.577,1.577H35.231a1.578,1.578,0,0,1-1.577-1.577V22.611a1.578,1.578,0,0,1,1.577-1.577h5.258a1.578,1.578,0,0,1,1.577,1.577Zm0-12.62a1.578,1.578,0,0,1-1.577,1.577H35.231a1.578,1.578,0,0,1-1.577-1.577V9.991a1.578,1.578,0,0,1,1.577-1.577h5.258a1.578,1.578,0,0,1,1.577,1.577Z"/></svg>
            </div>
            <div className="category__name">Civil</div>
            <div className="category__vacancy">1400jobs</div>
        </div>
        </div>
    )
}

export default Categoryslider
