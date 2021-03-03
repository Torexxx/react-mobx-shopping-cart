import React from 'react'
import styles from './cart.module.css'
import AppMinMax from "~c/inputs/minmax"
import {observer, inject} from 'mobx-react' //коннектор чтобы класс автообновлялся
import { Link }  from 'react-router-dom'
import { routesMap } from "~/routes"
import LinkButton from '~c/links/button'

    @inject('stores') @observer class Cart extends React.Component {

    render() {

        let cartModel = this.props.stores.cart

        let productList = cartModel.productsDetailed.map( p => {
            return (
                <tr key={p.id}>
                    <td>{p.title}</td>
                    <td>{p.price}</td>

                    <td><AppMinMax min={1}
                                   max={p.rest}
                                   cnt={p.cnt}
                                   onChange={ cnt => cartModel.change(cnt, p.id) }
                                   // onChange={ cartModel.changeOn[i] }

                    />
                    </td>

                    <td>{p.price * p.cnt} </td>
                    <td className={styles.remove} onClick={() => cartModel.remove(p.id)}>&times;</td>
                </tr>
            )
        })

        return (
            <>
                {productList.length
                    ? <>
                        <h2>Cart</h2>
                        <hr/>
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Count</td>
                                <td>Total</td>
                                <td>Actions</td>
                            </tr>
                            </thead>
                            <tbody>
                            { productList }
                            </tbody>
                        </table>

                        <h2>Total: { cartModel.total }</h2>
                        <hr/>
                        <div className={ styles.btnNext }>
                            <Link to={routesMap.order} className="btn btn-primary">Next step</Link> &nbsp;
                            <LinkButton test = {1} to={routesMap.order} className="btn btn-primary">Next step</LinkButton>
                        </div>
                    </>

                    : <p>Корзина пуста</p>
                }
            </>
        )
    }
}



export default Cart