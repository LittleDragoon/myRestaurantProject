//Actions constitué de type et payload : 
//type représente le type d'action qu'on veut faire 
//et payload représente ce que l'action va faire, sa valeur


import * as actionTypes from './types';

import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://my-restaurant-proj.herokuapp.com/api/products/${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            title: data.title,
            description: data.description,
            price: data.price,
            image: data.image,
            _id: data._id,
            qty,
            type: data.type
        },
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            _id: id
        }
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const adjustQty = (id, value) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.ADJUST_QTY,
        payload: {
            _id: id,
            qty: value,
        }
    });

    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};


