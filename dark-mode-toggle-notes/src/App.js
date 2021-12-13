
import Navbar from "./Navbar"
import Main from "./Main"
import React from "react"

export default function App() {

  const[darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
 setDarkMode(prevDarkMode => !prevDarkMode)

}    return (
        <div className ="container">
        <Navbar  toggleDarkMode ={toggleDarkMode} darkMode = {darkMode}/>
        <Main darkMode = {darkMode}/>
        </div>
    )
}



