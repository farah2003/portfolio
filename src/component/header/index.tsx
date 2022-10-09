import React from "react"
import main from '../../assets/main.png'
import './style.css'
const header =()=>{
    return(
        <div className="Header">
            <div className="information">
                <h1>Hi!</h1>
                <h1>I am <strong>Farah Shaqoura</strong></h1>
                <div className="info">
                <h1>Full Stack Web Developer</h1>
                </div>
               
            </div>
            <div>
                <img src={main} style={{height:'550px'}} />
            </div>
            
        </div>
    )
}
export default header