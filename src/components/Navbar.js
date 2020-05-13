import React, { Component } from 'react'
import logo from './logoReclamos.png'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {FaUser} from 'react-icons/fa'

export default class Navbar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt= "LogoReclamos"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.setState.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/Login">Iniciar Sesión</Link>
                        </li>
                        <li>
                            <Link to="/SignUp">Registrarse</Link>
                        </li> 
                    </ul>
                </div>
            </nav>
        )
    }
}
