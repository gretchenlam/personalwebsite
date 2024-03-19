import React from "react";
import { FiInstagram, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.github.com/gretchenlam" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/gretchen-lam/" className="home__social-icon" target="_blank" rel="noreferrer" >
                <FiLinkedin />
            </a>    
            <a href="https://www.instagram.com/gurchout/" className="home__social-icon" target="_blank" rel="noreferrer" >
                <FiInstagram />
            </a>    
        </div> 
    ); 
}

export default Social;