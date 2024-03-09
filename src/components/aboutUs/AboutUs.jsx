import React from 'react'
import './aboutus.css'

function AboutUs() {
    return (
        <div className='aboutus bg flex-center section-padding' id='aboutus'>
            <div className="aboutus-content flex-center">
                <div className="aboutus-content-about">
                    <h1 className="headtext-baskerville">About Us</h1>
                    <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel.</p>
                    <a href="/" class="bn3637 bn37">Know More</a>
                </div>

                <div className="aboutus-v-line"></div>

                <div className="aboutus-content-history">
                    <h1 className="headtext-baskerville">Our History</h1>
                    <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel.</p>
                    <a href="/" class="bn3637 bn37 bn01">Know More</a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs