import React, { Component } from 'react'
import {GoMail, GoCreditCard} from 'react-icons/go'
import {FaPeopleCarry,FaPencilRuler} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        services: [
            {
                icon: <GoMail/>,
                title: "Para obtener ayuda contactarse con: ",
                info: 'admin@reclamosweb.com'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title= "Ayuda" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
