import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer" id='contact'>
            <ul className='footer-ul'>
                <li><a className='footer-link' href="">Instagram</a></li>
                <li><a className='footer-link' href="">Facebook</a></li>
                <li><a className='footer-link' href="">Email</a></li>
                <li><a className='footer-link' href="">Youtube</a></li>
                <li>
                    <p>👋</p>
                </li>
            </ul>
        </div>
    )
}

export default Footer