import React, { Component } from 'react'
import {ProductContext} from "../context"

export default class FeatureProducts extends Component {
    static contextType = ProductContext
    render() {
        
        return (
            <div> 
                por MicayNacho producciones ©
            </div>
        )
    }
}
