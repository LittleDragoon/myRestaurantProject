import * as actionTypes from "./types";
const CART_INITIAL_STATE = {
    cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const Newitem = action.payload;
            //Check if the item is in Panier already
            const inPanier = state.cartItems.find(item => item._id === action.payload._id ? true : false)
            // Si le item est dans le panier ET correspond à l'id, alors on augmente la qty
            // Si le item est dans le panier et correspond pas à l'id, on renvoie juste l'item inchangé
            // Sinon, on ajoute le nouvel élément
            return {
                ...state,
                cartItems: inPanier ?
                    state.cartItems.map(item => item._id === action.payload._id ? { ...item, qty: item.qty + 1 } : item)
                    : [...state.cartItems, { ...Newitem, qty: 1 }]

            }

        case (actionTypes.REMOVE_FROM_CART):
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item._id !== action.payload._id)
            };

        case (actionTypes.ADJUST_QTY):
            return {
                ...state,
                cartItems: state.cartItems.map(item => item._id === action.payload._id ? { ...item, qty: Number(action.payload.qty) } : item)

            };

        default:
            return state;
    }
};