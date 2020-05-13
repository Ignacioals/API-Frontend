import React, { Component } from 'react'
//import items from './data'

const ProductContext = React.createContext();
//ProductContext.Provider value={'hello'}
class ProductProvider extends Component {
    state={
        Products:[],
        sortedProducts:[],
        featuredProducts:[],
        loading: true
    };
    // getData

    /*componentDidMount(){
        let Products = this.formatData(items)
    }
*/


    render() {
        return (
            <ProductContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export{ProductProvider, ProductConsumer, ProductContext};
