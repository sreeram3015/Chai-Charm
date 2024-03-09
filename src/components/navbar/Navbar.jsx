import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './navbar.css'

function Navbar() {

    const[toggleMenu, setToggleMenu] = useState(false);


    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="#"><img src='./src/assets/chaicharmlogo.jpeg' alt='Chai Charm Logo' /></a>
                </div>

                <ul className="navbar-links">
                    <li className="p-opensans"><a href='#home'>Home</a></li>
                    <li className="p-opensans"><a href='#about'>About</a></li>
                    <li className="p-opensans"><a href='#menu'>Menu</a></li>
                    <li className="p-opensans"><a href='#contact'>Contact</a></li>
                </ul>

                <div className="navbar-smallscreen">
                    <GiHamburgerMenu color='#fff' fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)} />

                    {toggleMenu &&(
                        <div className="navbar-smallscreen-overlay flex-center slide-bottom">
                            <MdOutlineRestaurantMenu fontSize={27} cursor={'pointer'} className='overlay-close' onClick={() => setToggleMenu(false)} />
                            <ul className="navbar-smallscreen-links">
                                <li className="p-opensans"><a href='#home'>Home</a></li>
                                <li className="p-opensans"><a href='#about'>About</a></li>
                                <li className="p-opensans"><a href='#menu'>Menu</a></li>
                                <li className="p-opensans"><a href='#contact'>Contact</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar