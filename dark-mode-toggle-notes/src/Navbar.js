import React from "react"

export default function Navbar(){
    return(
        <nav className = "">
            <img src=".logo.svg" className="App-logo" alt="logo" />
            <h3 className= "nav--logo_text"> React Facts</h3>
            <div className= "toggler">
                <p className= "toggler--light"> light</p>
                <div></div>
                <p className= "toggler--dark">dark</p>
            </div>
        </nav>
    )
}