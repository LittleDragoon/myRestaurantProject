import React from 'react'
import Section from '../Section/Section';
import ScrollButton from '../Scroll/Scroll';
import Navbar from "../Navbar/Navbar";

const Accueil = () => {
    return (
        <div>
            <Navbar />
            <Section type="entree" titre="Entrée" />
            <Section type="plat" titre="Plat" />
            <Section type="dessert" titre="Dessert" />
            <ScrollButton boolean="false" height="1950" />
        </div>
    )
}

export default Accueil