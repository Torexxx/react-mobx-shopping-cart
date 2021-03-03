import React from 'react'
// import orderModel from '~s/order'
// import cartModel from '~s/cart'
// import { Link } from 'react-router-dom'
// import { urlBuilder } from "~/routes"
import withStore from "~/hocs/withStore"

class Result extends React.Component {


    render() {
        debugger
        let orderModel = this.props.stores.order

        // let posts = [ 1, 2, 3 ]
        //
        // let rows = posts.map( post => {
        //     return <div key={post}>
        //         <Link to={ urlBuilder('blogPost', { url: post })} > Post { post }</Link>
        //     </div>
        // })

        return (

            <React.Fragment>
                <p>Hello!!!, {orderModel.getValue('firstName')}, congratulations!</p>
                <h2>Total: { orderModel.dataOrder.total}</h2>
                <h1>In process!! We'l call you later!</h1>
                {/*{ rows }*/}

            </React.Fragment>
        )
    }

}


export default withStore(Result)