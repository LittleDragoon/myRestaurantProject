import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Product from "../Products/Products";
//Actions
import { getProducts as listProducts } from "../../redux/Commander/productActions"
import { addToCart } from '../../redux/Commander/cartActions'


const Section = ({ type, titre }) => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    console.log(titre);


    return (
        <div>
            {loading ? (
                <h2> Loading... </h2 >
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <div id={type} className='ProductsContainer'>
                    <div className='ProductsHeading'>
                        <div className="ProductsEcriture">{titre}</div>
                    </div>
                    <div className='ProductWrapper'>

                        {products.map((product) => (
                            product.type === type ?
                                <Product
                                    key={product._id}
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
