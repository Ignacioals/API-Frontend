import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <Hero>
            <Banner >
                <p>Ingresa tu usuario y contraseña:</p>
                <p> Usuario <input className="input" placeholder="Usuario"></input> </p>
                <p></p>
                <p> Contraseña <input className="input" type="password" placeholder="Contraseña"></input> </p>
                <p></p>
                <Link to="/unidadesCorrespondientes" className="btn-primary">CONTINUAR</Link>
            </Banner>
        </Hero>
    )
}