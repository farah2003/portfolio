import React from 'react';
import'./style.css'
import wlinkedin from '../../assets/wlinkedin.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import twiiter from '../../assets/twitter.svg'
import wtwiiter from '../../assets/wtwittee.svg'
import wgithub from '../../assets/wgithub.svg'
const footer =()=>{
    return (
        <div className='footer'>
            <div className='contact-section'>
            <h1><span>GET IN</span> TOUCH</h1>
            <p>Feel free to send a <span>message</span> from me</p>
            <form className='form'>
                <input type="text" placeholder="Your name..." required/>
                <input type="text" placeholder="Your email..." required/>
                <textarea  placeholder="Your message..." required spellCheck="false"/>
                <button type='submit' className='send-btn'>Send Message</button>
            </form>
        </div>
        <div className='social-media-container'>
            <h1>FIND <span>ME</span> ON</h1>
            <p>Feel free to <span>connect</span> with me</p>
            <ul className='social-media-link'>
                <li>
                    <a><img src={github} width="20" height="20" /></a>
                </li>
                <li> <a><img src={linkedin} width="20" height="20" /></a>
                </li>
                <li>
                    <a><img src={twiiter} width="25" height="25" /></a>
                </li>
            </ul>
        </div>
        <div className='box'>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div className='container-fluid'>
            <div className='first-container'>
                <h3>Designed and Developed by Farah Shaqoura</h3>
            </div>
            <div className='secand-container'>
                <h3>copyright © 2022 farah.</h3>
            </div>
            <div>
                <ul className='social-icon'>
                <li> <a><img src={wgithub} width="20" height="20" /></a>
                </li>
                <li>
                    <a><img src={wlinkedin} width="20" height="20" /></a>
                </li>
                <li>
                    <a><img src={wtwiiter} width="23" height="23" /></a>
                </li>
                </ul>
            </div>

        </div>  
            
        </div>
    )
}
export default footer;