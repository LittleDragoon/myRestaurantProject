import * as actionTypes from "./types";
const order_INITIAL_STATE = {
    orders: [],
};

export const orderReducer = (state = order_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ORDER:
            return {
                ...state,
                order: action.payload
            };
        case actionTypes.GET_ORDER_REQUEST:
            return {
                loading: true,
                orders: [],
            };
        case actionTypes.GET_ORDER_SUCCESS:
            return {
                orders: action.payload,
                loading: false,
            };
        case actionTypes.GET_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};