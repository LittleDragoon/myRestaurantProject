// Manipulate and change the data in the store.

import { combineReducers } from "redux";
import CommandeReducer from './Commander/reducer';


const rootReducer = combineReducers(
    {
        Commande: CommandeReducer,
    }
);

export default rootReducer;