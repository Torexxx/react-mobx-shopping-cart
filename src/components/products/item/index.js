import React from 'react'
import styles from './products.module.css'
import Button from "react-bootstrap/Button"

export default function(props) {

    let { cartModel, onAdd, onRemove, inCart, product, appMinMaxComponent, backUrl } = props
    console.log('----',onRemove)
    debugger

    return (
        <>
            <h2> { product.title }</h2>
            <hr/>
            <div className={styles.productWrapper}>
                <div><strong>Price: {product.price}</strong></div>



                <props.linkComponent to={ backUrl }> Back to list </props.linkComponent>
                <p>Text about product. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto doloribus eveniet fugit non sequi tenetur voluptates voluptatum. Animi architecto autem blanditiis, commodi deserunt dolores iusto magni porro quam, quisquam repellat.</p>

                {
                    inCart
                        ?
                        <props.orderConfigComponent
                            cartModel = { cartModel }
                            product = {product}
                            appMinMax = { appMinMaxComponent }
                            onRemove = {onRemove}
                        />

                        :
                        <Button onClick={ onAdd } variant="success">

                            Add to cart
                        </Button>
                }
            </div>
        </>
    )
}