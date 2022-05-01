import React from 'react'
import './Navbar.css';
import images from '../../constants/images';
import { NavLink } from 'react-router-dom';


const Navbarbis = () => {



    return (
        <nav className='app__navbar'>
            <NavLink to="/" >

                <div className="app__navbar-logo">
                    <img className="app__image" src={images.thelogo} alt="app logo" />
                </div>
            </NavLink>



        </nav >
    )
}

export default Navbarbis;