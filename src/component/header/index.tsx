import React from "react"
import main from '../../assets/icon.png'
import mainBG from '../../assets/mainbg.png'
import './style.css'
const header =()=>{
    return(
        <div className="Header">
            <div className="information">
                <div className="info">
                <h1>Full Stack <br/>
                     Web Developer</h1>
                </div>
                <p>We are a digital agency that focuses on solving your problems<br/>  by making a product that will exceed .</p>
               <div className="btns">
                <a  className="hire" href="#">Hire Me</a>
                <a href="#" className="download">Download CV</a>
               </div>
            </div>
            <div className="parent">
                <img  className="image1" src={mainBG}   style={{height:'550px',width:'550px'}}  />
                <img className="image2" src={main} style={{height:'786px'}} />
            </div>
            
        </div>
    )
}
export default header