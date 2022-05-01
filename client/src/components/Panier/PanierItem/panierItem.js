import React, { useState } from 'react'
import './panierItem.css'
import { FaTrash } from 'react-icons/fa';

import { useDispatch } from "react-redux";


import { adjustQty } from '../../../redux/Commander/cartActions';

const PanierItem = ({ data, removeFromCart }) => {

    const dispatch = useDispatch();

    const [input, setInput] = useState(data.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustQty(data._id, e.target.value));
    }

    return (
        <div className="cartItem">
            <div className="test1">
                <img
                    className="cartItem__image"
                    src={data.image}
                    alt={data.title}
                />
            </div>
            <div className="cartItem__details">
                <div className="details__title">{data.title}</div>

                <p className="details__desc">{data.description}</p>
                <p className="details__price">{data.price} €</p>
            </div>
            <div className="cartItem__actions">
                <div className="cartItem__qty">
                    <label htmlFor="qty">Qty</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}

                        onChange={(e) => { onChangeHandler(e) }}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(data._id)}
                    className="actions__deleteItemBtn"
                >
                    <FaTrash className="actions__deleteItemImage" />
                </button>
            </div>
        </div>
    );
};



export default PanierItem;

