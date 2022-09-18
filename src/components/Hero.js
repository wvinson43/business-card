import React from "react"
import profilePic from "../images/profile.jpg"

function Hero () {
    return (
        <div className="hero-card">
            <img src={profilePic} className="card--picture" />
            <h2 className="card--name">Wes Vinson</h2>
            <h4 className="card--role">Front-end Developer</h4>
            <a href="mailto:wesleyvinson2022@gmailcom" className="card--btn">
                <i className="fa-solid fa-envelope"></i>Email</a>
            <p className="card--contact">wesleyvinson2022@gmail.com</p>
        </div>
    )
}

export default Hero