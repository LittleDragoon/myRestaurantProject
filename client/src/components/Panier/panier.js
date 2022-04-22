import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { PanierItem } from '../../components';
import "./panier.css"

import { removeFromCart } from "../../redux/Commander/cartActions";

import Navbarbis from "../Navbar/Navbarbis";
import { NavLink } from 'react-router-dom';
import ScrollButton from "../Scroll/Scroll";
import OrderDetails from '../OrderDetails/OrderDetails';
import { createOrder } from "../../redux/Commander/orderActions";

const Panier = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cart.cartItems);
        dispatch(createOrder(cart));
        localStorage.clear();
        //setValid(true)
    }

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const [valid, setValid] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);


    useEffect(() => {
        let countItems = 0;
        let countPrice = 0;

        cartItems.forEach(item => {
            countItems += item.qty;
            countPrice += item.qty * item.price;
        });

        setTotalPrice(countPrice);
        setTotalItems(countItems);


    }, [cartItems, totalPrice, totalItems, setTotalItems, setTotalPrice])



    return (
        <div>
            <Navbarbis />
            <div className="wrapper">
                <div className="cart">
                    <div className="cart__items">
                        {cartItems.map((prod) => (
                            < PanierItem
                                key={prod._id}
                                data={prod}
                                removeFromCart={() => { dispatch(removeFromCart(prod._id)) }}
                            />
                        ))}
                    </div>
                    <div className="cart__summary">
                        <h4 className="summary__title"> Votre commande</h4>
                        {cartItems.map((prod) => (
                            <div className='test'>
                                <span>{prod.title} x {prod.qty} :</span>
                                <span> {prod.qty * prod.price} € </span>
                            </div>
                        ))}

                        <div className='barre'>_________________________________________________</div>

                        <div className="summary__price">

                            <span>TOTAL: ({totalItems} produits)</span>
                            <span>{totalPrice} €</span>
                        </div>
                        <button className="summary__checkoutBtn" onClick={handleSubmit}>
                            Valider la commande
                        </button>
                        <NavLink to="/" >
                            <button className="summary__gobackBtn">
                                Retourner à l'accueil
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <ScrollButton boolean="false" height="120" />

            <div>
                {valid && <OrderDetails />}
            </div>
        </div>
    );

};


export default Panier;