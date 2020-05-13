import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Bienvenidos" subtitle="a ReclamosWeb.com">
                <Link to='/Login' className="btn-primary">
                    Ingresar
                </Link>
            </Banner>
        </Hero>
        </>
    );
}
