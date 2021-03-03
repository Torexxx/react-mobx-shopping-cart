import React from 'react'
import styles from "./orderConfig.module.css"
import { observer } from "mobx-react"

export default observer(function(props) {
    let {cartModel, product, onRemove} = props

    let productDetailed = cartModel.products.filter( p => {
        //как назвать эту переменную?
        return p.id === product.id
    } )[0].cnt

    return (
        <div className={styles.configWrapper}>
            <props.appMinMax
                             min={1}
                             max={product.rest}
                             cnt={productDetailed}
                             onChange={ cnt => cartModel.change(cnt, product.id) }

            />
            <button className = "btn btn-danger"
                    style={{'margin': '10px 0'}}
                    onClick={ onRemove } >
                Remove from cart
            </button>

            <div>Total: {cartModel.products.filter( p => {
                return p.id === product.id

            } ).map( pr => {
                return  product.price * pr.cnt
            })}
            </div>
        </div>
    )
})