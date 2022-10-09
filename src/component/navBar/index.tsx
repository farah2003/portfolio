import React from "react"
import './style.css'
const NavBar =()=>{
    return (
        <div className="navBarContainer">
            <div className="logo">
                <a href="/"> Farah <span>Shaqoura</span></a>    
            </div>
        <div className="elements">
          <div><a href="/">Home</a></div>
          <div><a href="/">About</a></div>
          <div><a  href="/">Projects</a></div>
          <div><a className="hire-button" href="/">Hire Me</a></div>
        </div>
        </div>
    )

}
export default NavBar