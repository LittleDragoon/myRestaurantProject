
import * as actionTypes from './types';

import axios from "axios";

export const createOrder = (order) => (dispatch) => {

    axios.post("https://my-restaurant-proj.herokuapp.com/order", order).then(response => {


        dispatch({
            type: "CREATE_ORDER",
            payload: response.data
        })
    })
        .catch(error => {
            console.log(error);
        });

}



