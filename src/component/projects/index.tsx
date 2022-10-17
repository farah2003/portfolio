import React from "react"
import project1 from '../../assets/project1.png'
import './style.css'
const Porjects=()=>{
    return<div className="projects-section">
        <div className="header">
            <h1>My Projects</h1>
        </div>
        <div className="content">
            
            <div className="cards">
            <div className="card">
                <div className="imageWrapper">
                    <img src={project1}/>
                </div>
                <div className="cardContent">
                    <ul>
                        <li>Demo</li>
                        <li>Card</li>
                    </ul>
                    <p>projectName</p>
                    <p>E-commerce website for trading electronic devices, worked with my team to develop this website through analyzing the project and distributing tasks. Reactjs has been used as the front-end library, Expressjs as the back-end framework, PostgreSQL as our Database, and Jest.</p>
                </div>
            </div>
            <div className="card">
                <div className="imageWrapper">
                    <img src={project1}/>
                </div>
                <div className="cardContent">
                    <ul>
                        <li>Demo</li>
                        <li>Card</li>
                    </ul>
                    <p>projectName</p>
                    <p>E-commerce website for trading electronic devices, worked with my team to develop this website through analyzing the project and distributing tasks. Reactjs has been used as the front-end library, Expressjs as the back-end framework, PostgreSQL as our Database, and Jest.</p>
                </div>
            </div>
            <div className="card">
                <div className="imageWrapper">
                    <img src={project1}/>
                </div>
                <div className="cardContent">
                    <ul>
                        <li>Demo</li>
                        <li>Card</li>
                    </ul>
                    <p>projectName</p>
                    <p>E-commerce website for trading electronic devices, worked with my team to develop this website through analyzing the project and distributing tasks. Reactjs has been used as the front-end library, Expressjs as the back-end framework, PostgreSQL as our Database, and Jest.</p>
                </div>
            </div>
            </div>

        </div>
    </div>
    
}
export default Porjects