import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Interests from "./components/Interests"
import { library } from "@fortawesome/fontawesome-svg-core";
import Footer from "./components/Footer"


function App() {
   return (
        <div className="hero">
            <Hero />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App