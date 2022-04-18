import React from 'react'
import Section from '../Section/Section';
import ScrollButton from '../Scroll/Scroll';

const Accueil = () => {
    return (
        <div>
            <Section type="entree" titre="Entrée" />
            <Section type="plat" titre="Plat" />
            <Section type="dessert" titre="Dessert" />
            <ScrollButton />
        </div>

    )
}

export default Accueil