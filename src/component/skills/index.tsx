import React from "react"
import './style.css'
import reactImage from '../../assets/react.png'   
import node from '../../assets/node.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import express from '../../assets/express.png'
import redux from '../../assets/redux.png'
import firebaseImage from '../../assets/firebase.png'
import antd from '../../assets/antd.png'
import materialUi from '../../assets/materialui.png'
import ghost from '../../assets/ghost.png'
import postgres from '../../assets/postgress.png'
import mongo from '../../assets/mongo.png'
import swagger from '../../assets/swagger.png'
import jest from '../../assets/jest.png' 
import sass from '../../assets/sass.png'
import linux from '../../assets/linux.png'
import postman from '../../assets/postman.jpg'
import heroku from '../../assets/heroku.png'
import vscode from '../../assets/vscode.png'
import netlify from '../../assets/netlify.png'
import github from '../../assets/github.png'
import figma from '../../assets/figma.png'

const Skills=()=>{
return<div className="skills-parent"> 
    <div  className="skills-section">
    <h1>Skills</h1>     
    </div>

  <div className="skills-container">
  <div className="skill-section"> <img src={ts} style={{width:"80%",height:'70%'}}/></div>
  <div className="skill-section"> <img src={js} style={{width:"85%",height:'65%'}}/></div>
  <div className="skill-section"> <img src={html} style={{width:"70%",height:'70%'}}/></div>
  <div className="skill-section"> <img src={css} style={{width:"55%"}}/></div>
  <div className="skill-section">
    <img src={reactImage} style={{width:"80%",height:'70%'}}/>
  </div>
  <div className="skill-section"> <img src={redux} style={{height:"70%",width:'70%'}}/></div>
  <div className="skill-section"> <img src={firebaseImage} style={{height:"70%",width:'70%'}}/></div>
  <div className="skill-section"> <img src={node} style={{height:"80%",width:'75%'}}/></div>
  <div className="skill-section"> <img src={express} style={{width:"80%",height:'80%'}}/></div>
  <div className="skill-section"> <img src={postgres} style={{width:"70%",height:'70%'}}/></div>
  <div className="skill-section"> <img src={mongo} style={{width:"95%",height:'95%'}}/></div>
  <div className="skill-section"> <img src={jest} style={{width:"70%",height:'70%'}}/></div>
  <div className="skill-section"> <img src={antd} style={{height:"65%",width:'65%'}}/></div>
  <div className="skill-section"> <img src={materialUi} style={{height:"65%",width:'65%'}}/></div>
  <div className="skill-section"> <img src={sass} style={{width:"55%"}}/></div>
  <div className="skill-section"> <img src={ghost} style={{height:"50%",width:'50%'}}/></div>
  <div className="skill-section"> <img src={linux} style={{width:"65%",height:'60%'}}/></div>
  <div className="skill-section"> <img src={vscode} style={{width:"60%",height:'65%'}}/></div>
  <div className="skill-section"> <img src={github} style={{width:"80%",height:'80%'}}/></div>
  <div className="skill-section"> <img src={swagger} style={{width:"75%",height:'75%'}}/></div>
  <div className="skill-section"> <img src={postman} style={{width:"55%"}}/></div>
  <div className="skill-section"> <img src={heroku} style={{height:"65%",width:'65%'}}/></div>
  <div className="skill-section"> <img src={netlify} style={{height:"70%",width:'75%'}}/></div>

  
  </div>
  {/* <div  className="skills-section  tools-container">
    <h1>Tools I use </h1>     
    </div> */}

  {/* <div className="skills-container tools-container">   
  

  </div> */}


  
</div>
}
export default Skills