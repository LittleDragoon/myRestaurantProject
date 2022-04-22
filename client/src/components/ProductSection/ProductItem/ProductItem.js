
import './ProductItem.css'
import React from 'react';



const Products = ({ title, description, price, image, addToCartHandler }) => {

    return (
        <div className='ProductCard '>
            <img className='ProductImg' src={image} alt='entree' />
            <div className='ProductInfo'>
                <div className='ProductTitle'> {title} </div>
                <div className='ProductDesc'> {description} </div>
                <div className='ProductPrice'> {price} €</div>


                <button className='ProductButton' type="button" onClick={addToCartHandler}> Ajouter au panier</button>






            </div>
        </div>

    )


};





export default Products;
