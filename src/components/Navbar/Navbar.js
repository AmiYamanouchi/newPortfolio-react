import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import "./Navbar.css";



function Navbar() {
    const [click,setClick] = useState(false)
    return (
    
        <nav className="gnav" className="fixed">
            <ul className="gnav-list">
        {/* <!-- <li class="gnav-item"><a class="gnav-link" href="#works-section">WORKS</a></li> --> */}
        {/* <!-- <li class="gnav-item"><a class="gnav-link" href="#feature-section">FEATURE</a></li> --> */}
            <li className="gnav-item"><HashLink smooth className="gnav-link" to="#about-section">ABOUT</HashLink></li>
            <li className="gnav-item"><HashLink smooth className="gnav-link" to="#works-section">WORKS</HashLink></li>
            <li className="gnav-item"><HashLink smooth className="gnav-link" to="#skill-section">SKILL</HashLink></li>
            <li className="gnav-item"><HashLink smooth className="gnav-link" to="#contact-section">CONTACT</HashLink></li>
            <li className="gnav-item"><a className="gnav-link" href="https://amiyamanouchi-blog.vercel.app/" target="_blank" rel="noopener noreferrer">BLOG</a></li>
            </ul>
        </nav>
    
    )
}

export default Navbar
