import * as actionTypes from "./types";
const order_INITIAL_STATE = {
    orders: [],
};

export const orderReducer = (state = order_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CREATE_ORDER:
            console.log(action.payload);
            return {
                ...state,
                order: action.payload
            }
        default:
            return state;
    }
};