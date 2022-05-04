import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import './Navbar.css';
import images from '../../constants/images';
import { NavLink } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const [totalItems, setTotalItems] = useState(0);


    useEffect(() => {
        let countItems = 0;

        cartItems.forEach(item => {
            countItems += item.qty;
        });

        setTotalItems(countItems);


    }, [cartItems, totalItems, setTotalItems,])


    return (
        <nav className='app__navbar'>

            <NavLink to="/" onClick={scrollToTop} >
                <div className="app__navbar-logo" >
                    <img className="app__image" src={images.thelogo} alt="app logo" />
                </div>
            </NavLink>

            <ul className="app__navbar-links">
                {/*<li className="app__navbar-links-li">
                    <NavLink className="ecriture" to="/" onClick={() => window.location.reload()} >
                        Accueil
                    </NavLink>
                </li>*/}

                <li className="app__navbar-links-li" > <a href="#entree" className="ecriture">Entrée</a></li>
                <li className="app__navbar-links-li"><a href="#plat" className="ecriture" >Plat</a></li>
                <li className="app__navbar-links-li"> <a href="#dessert" className="ecriture">Dessert</a></li>
            </ul>

            <div className="app__navbar-panier">
                <li className="app__navbar-panier-li">
                    <NavLink onClick={() => window.location.assign("/panier").reload()} className="ecriture" to="/panier"  >
                        <Badge badgeContent={totalItems} color="primary">
                            <FaShoppingCart />
                        </Badge>
                    </NavLink>
                </li>

            </div>
        </nav >
    )
}

export default Navbar;