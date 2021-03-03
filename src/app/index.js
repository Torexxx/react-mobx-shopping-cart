import React from 'react'
import 'mobx-react-lite/batchingForReactDom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import styles from './app.module.css'
import routes, {routesMap, links} from '~/routes'
import withStore from '~/hocs/withStore'
import LinkLi from '~c/links/li'



class App extends React.Component {

    render() {

        let { cart } = this.props.stores
        let routesComponents = routes.map( route => {
            return (
                <Route key={ route.url }
                       path={ route.url }
                       component={ route.component }
                       exact ={ route.exact }
                />
            )})

        return (

                <Router>
                    <header>
                        <div className="container">
                            <hr/>
                            <div className="row justify-content-between">
                                <div className="col col-4">
                                    <div className="alert alert-success"><i>IShoppy</i></div>
                                </div>
                                <div className="col col-3">
                                    <div className="alert alert-warning">
                                        <strong>
                                            In Cart: {cart.productsInCart}
                                            <br/>
                                            Total: {cart.total}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </header>
                    <div className = "container">
                        <div className="row">
                            <div className="col-sm-4">
                                <ul className="list-group">

                                    <LinkLi links = {links}/>

                                </ul>
                            </div>
                            <div className="col-sm-8">
                                <Switch>
                                    { routesComponents }
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
        )
    }
}

export default withStore(App)
