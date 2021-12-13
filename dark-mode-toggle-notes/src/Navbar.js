import React from "react"


export default function Navbar(props){
    return(
        <nav className = {props.darkMode ? "dark" : ""}>
            <img src="https://icon-library.com/images/react-icon/react-icon-29.jpg" className="App-logo" alt="logo" />
            <h3 className= "nav--logo_text"> ReactFacts</h3>

            <div className= "toggler">
                <p className= "toggler--light"> light</p>
                <div className="toggler--slider">
                <div onClick ={props.toggleDarkMode}className="toggler--slider--circle"> </div>
                </div>
                <p className= "toggler--dark">dark</p>
            </div>

        </nav>
    )
}