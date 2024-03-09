import React from 'react'
import './header.css'
import SubHeading from '../SubHeading/SubHeading'


function Header() {
    return (
        <div className="header wrapper section-padding" id='home'>
            <div className="wrapper-info">
                <SubHeading title='Sip & Savour' />
                <h1 className="header-h1">Coffee, Conversations, and More</h1>
                <p className="p-opensans" style={{ margin: '2em 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Duis ultricies lacus sed turpis.</p>
                <a href="/" class="bn3637 bn37">Explore Menu</a>
            </div>

            <div className="wrapper-img">
                <img src="./src/assets/headerimage.jpg" alt="header image" />
            </div>
        </div>
    )
}

export default Header