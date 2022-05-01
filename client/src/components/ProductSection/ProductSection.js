import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductItem from "./ProductItem/ProductItem";
//Actions
import { getProducts as listProducts } from "../../redux/Commander/productActions"
import { addToCart } from '../../redux/Commander/cartActions'
import "./ProductSection.css"


const Section = ({ type, titre }) => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);



    return (
        <div>

            {loading ? (
                <h2 className='Titre'> Currently loading... </h2 >
            ) : error ? (
                <h2 className='Titre'>{error}</h2>
            ) : (
                <div id={type} className='ProductsContainer'>
                    <div className='ProductsHeading'>
                        <div className="ProductsEcriture">{titre}</div>
                    </div>
                    <div className='ProductWrapper'>

                        {products.map((product) => (
                            product.type === type ?
                                <ProductItem
                                    key={product._id}
                                    ide={product._id}
                                    title={product.title}
                                    description={product.description}
                                    price={product.price}
                                    image={product.image}
                                    addToCartHandler={() => {
                                        dispatch(addToCart(product._id, 1));
                                    }}
                                />
                                : null
                        ))
                        }

                    </div>
                </div>
            )}
        </div>)
}

export default Section;
