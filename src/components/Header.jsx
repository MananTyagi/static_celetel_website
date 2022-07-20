import React from 'react';
import Navbar from './Navbar';


function Header(){

    return (
        <div id="main">
            <Navbar/>
            <div className="name">
                <h1>It is a <span>ReactJS</span> website</h1>
                <p className="details">Most calenders are designed for teams. This is dsigned for freelancers.
                    who want a simple way to plan their schools.
                </p>
                <div className='header-btns'>
                    <a href="#" className="cv-btn">Hire me</a>
                    <a href="#" className="cv-btn1">Download App</a>

                </div>
            </div>
            <div className="arrow"> </div>
        </div>
    )
}
export default Header;