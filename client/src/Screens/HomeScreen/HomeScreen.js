import React from 'react'
import ProductSection from '../../components/ProductSection/ProductSection';
import ScrollButton from '../../components/Scroll/Scroll';
import Navbar from "../..//components/Navbar/Navbar";

const HomeScreen = () => {
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

export default HomeScreen;