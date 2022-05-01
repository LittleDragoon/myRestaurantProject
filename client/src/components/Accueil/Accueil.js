import React from 'react'
import ProductSection from '../ProductSection/ProductSection';
import ScrollButton from '../Scroll/Scroll';
import Navbar from "../Navbar/Navbar";

const Accueil = () => {
    return (
        <div>
            <Navbar />
            <ProductSection type="entree" titre="Entrée" />
            <ProductSection type="plat" titre="Plat" />
            <ProductSection type="dessert" titre="Dessert" />
            <ScrollButton boolean="false" height="1950" />
        </div>
    )
}

export default Accueil