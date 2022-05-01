
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { adjustQty } from '../../redux/Commander/cartActions';

import './Bouton.css';

const ProductButton = ({ ide, qty }) => {

    console.log(typeof (qty));
    const dispatch = useDispatch();

    const [input, setInput] = useState(qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        dispatch(adjustQty(ide, e.target.value));
    }

    return (
        <div className="bloc__button2" >
            <div className="favorite styled" onClick={() => { }} > <FaMinus /></div >
            <div><input
                min="1"
                type="number"
                id="qty"
                name="qty"
                value={input}
                onChange={(e) => { onChangeHandler(e) }}
            /> </div >
            <div className="favorite styled" onClick={() => { }} > <FaPlus /></div >
            <div />
        </div>)

}

export default ProductButton