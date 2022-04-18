import React from 'react'

import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import { useState } from "react";
import './Bouton.css';

const Bouton = () => {

    const [valueCommande, setValueCommande] = useState(-1);

    const Ajouter = (e) => {
        e.preventDefault();
        setValueCommande(c => c + 1)
    }

    const Ajouter2 = (e) => {
        e.preventDefault();
        setValueCommande(c => c + 2)
    }

    const Soustraire = (e) => {
        e.preventDefault();
        setValueCommande(c => c - 1)
    }


    if (valueCommande <= 0) {
        return (
            <div className="bloc__button">

                <button class="favorite styled" type="button" onClick={Ajouter2}  >Ajouter au panier</button>
            </div>)
    }
    return (
        <div className="bloc__button2">
            <div className="favorite styled" onClick={Soustraire}> <FaMinus /></div>
            <div > <input className='text__form_input' type="text" value={valueCommande} onChange={e => setValueCommande(Number(e.target.value))} /> </div>
            <div className="favorite styled" onClick={Ajouter}> <FaPlus /></div>
            <div />
        </div >
    )
};

export default Bouton