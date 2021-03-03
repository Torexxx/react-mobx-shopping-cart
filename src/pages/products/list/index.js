import React from 'react'
import styles from './products.module.css'
import {Link} from "react-router-dom"
import { urlBuilder } from "~/routes/index"
import {Card, Button} from "react-bootstrap"
import OrderConfig from '~c/orderConfig'
import AppMinMax from "~c/inputs/minmax"
import withStore from '~/hocs/withStore'


 @withStore class Products extends React.Component {

    render() {

        let cartModel = this.props.stores.cart
        let productsModel = this.props.stores.products
        let orderConfig
        let productCards = productsModel.products.map((product) => {

            { cartModel.inCart(product.id)
            ?
                orderConfig  = <OrderConfig
                                cartModel = { cartModel }
                                product = {product}
                                appMinMax = { AppMinMax }
                                onRemove = { () => cartModel.remove(product.id)}
                                />
            :
                orderConfig = <Button variant="success"
                   onClick={() => cartModel.add(product.id)}>
                    Add to cart
                  </Button>
            }

            return <Card key={product.id} className={styles.product}>
                <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.price} р.</Card.Text>

                        <div><Link to={urlBuilder('product',{ id: product.id })}>Get more ...</Link></div>
                    <hr/>
                { orderConfig }

                <br/>
                </Card.Body>
            </Card>
        })

        return (
            <>
                <h2>Products</h2>
                <hr/>

                    <div className={styles.products}>

                        { productCards }

                    </div>
            </>
        )
    }
}


export default Products