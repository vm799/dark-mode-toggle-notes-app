import React from "react"


export default function Navbar(){
    return(
        <nav className = "">
            <img src="https://icon-library.com/images/react-icon/react-icon-29.jpg" className="App-logo" alt="logo" />
            <h3 className= "nav--logo_text"> ReactFacts</h3>
            <div className= "toggler">
                <p className= "toggler--light"> light</p>
                <div></div>
                <p className= "toggler--dark">dark</p>
            </div>
        </nav>
    )
}