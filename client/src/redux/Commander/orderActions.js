import * as actionTypes from "./types";

import axios from "axios";

export const createOrder = (order) => (dispatch) => {
  axios
    .post("https://benzhu-restaurant-project.onrender.com/order", order)
    .then((response) => {
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getOrder = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_ORDER_REQUEST });

    const { data } = await axios.get(
      "https://benzhu-restaurant-project.onrender.com/order"
    );
    console.log(data);

    dispatch({
      type: actionTypes.GET_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
