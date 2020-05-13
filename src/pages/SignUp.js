import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function SignUp() {
    return (
        <Hero>
            <Banner>
                <p>Ingresa tus datos a continuación: </p>
                <input></input>
                <Link to='/SignUp' className="btn-primary">
                    Registrarse
                </Link>
            </Banner>
        </Hero>
    )
}