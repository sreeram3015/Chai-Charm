import React from 'react'
import SubHeading from '../SubHeading/SubHeading'
import data from '../../constants/data'
import './menu.css'

function Menu() {
    return (
        <div className='menu flex-center section-padding' id='menu'>
            <div className="menu-title">
                <SubHeading title="Flavors Tailored to Tempt" />
                <h1 className="headtext-baskerville">Today's Special</h1>
            </div>

            <div className="menu-special">
                <div className="card">
                    <div className="menu-special-items menu-special-roll flex-center">
                        <p className='menu-special'><h2>CHICKEN SHAWARMA ROLL</h2></p>
                        <div className="menu-special-roll-items">
                            {data.rolls.map((roll, index) => (
                                <div className='menu-item-details' key={index}>
                                    <h4>{roll.title} ⟹ {roll.price}</h4>
                                    <h5>{roll.tags}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="menu-special-items menu-special-plate flex-center">
                        <p className='menu-special'><h2>CHICKEN SHAWARMA PLATE</h2></p>
                        <div className="menu-special-plate-items">
                            {data.plates.map((plate, index) => (
                                <div className='menu-item-details' key={index}>
                                    <h4>{plate.title} ⟹ {plate.price}</h4>
                                    <h5>{plate.tags}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <a href="/" className="bn3637 bn37 bn01">View More</a>
        </div>
    );
}

export default Menu;