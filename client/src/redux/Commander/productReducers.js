import * as actionTypes from "./types";

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                products: action.payload,
                loading: false,
            };
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

