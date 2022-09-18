import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer () {
    return (
        <div className="footer">
            <a className="social--icon" href="https://www.linkedin.com/in/wesley-vinson-edd/"           target="_blank">
                <i className="img fa-brands fa-linkedin"></i>
            </a>
            <a className="social--icon" href="https://twitter.com/Wesley_Vinson38"
                target="_blank">
                <i className="img fa-brands fa-twitter"></i>
            </a>
            <a className="social--icon" href="https://github.com/wvinson43"
                target="_blank">
                <i className="img fa-brands fa-github"></i>
            </a>
            <a className="social--icon" href="https://codepen.io/wvinson43"
                target="_blank">
                <i className="img fa-brands fa-codepen"></i>
            </a> 
        </div>      
    )
}

export default Footer