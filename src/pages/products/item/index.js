import React from 'react'
import { routesMap } from "~/routes/index"
import E404 from '~c/errors/404/index'
import ProductItem from '~c/products/item'
import { Link } from "react-router-dom"
import AppMinMax from "~c/inputs/minmax"
import OrderConfig from '~c/orderConfig'
import withStore from "~/hocs/withStore"


class Product extends React.Component {

    render() {

        let id = this.props.match.params.id
        let product = this.props.stores.products.getById(id)
        let cart = this.props.stores.cart


        if(product === null) {
            return <E404/>
        }
        else{
            return <ProductItem

                //title
                //price
                product = { product }
                backUrl = { routesMap.home }
                cartModel = { cart }
                linkComponent = { Link }
                appMinMaxComponent = { AppMinMax }
                orderConfigComponent = { OrderConfig }
                inCart={cart.inCart(product.id)}
                onAdd={()=> cart.add(product.id)}
                onRemove={()=> cart.remove(product.id)}


            />
        }
    }
}


export default withStore(Product)