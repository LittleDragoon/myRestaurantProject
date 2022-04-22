
import * as actionTypes from './types';

import axios from "axios";

export const createOrder = (order) => (dispatch) => {
    axios.post("http://localhost:5000/order", order).then(response => {
        console.log(response);
        dispatch({
            type: 'CREATE_ORDER',
            payload: response.config.data
        })
    })
        .catch(error => {
            console.log(error);
        });

}



