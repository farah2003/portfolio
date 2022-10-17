    import React from "react"
    import './style.css'
    import logo from '../../assets/logo.png'
    const NavBar =()=>{
        return (
            <div className="navBarContainer">
                <div className="logo">
                    <img src={logo} style={{width:'70px'}}/>
                    <a href="/"> Farah <span>Shaqoura</span></a>    
                </div>
            <div className="elements">
            <div><a href="/">Home</a></div>
            <div><a href="/">About</a></div>
            <div><a  href="/">Projects</a></div>
            <div><a  href="/">Contact</a></div>
            </div>
            </div>
        )

    }
    export default NavBar