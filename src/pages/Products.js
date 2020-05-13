import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

const Products = () => {
    return (
        <Hero hero="ProductsHero">
            <Banner title="Nuestros Productos">
                <Link to='/' className="btn-primary">
                    Volver al Inicio
                </Link>
            </Banner>
        </Hero>
    )
};

export default Products
