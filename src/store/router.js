import React from 'react'
import Cart from '~p/cart'
import Order from '~p/order'
import Result from '~p/result'
import ErrorPage from '~p/error404'

import { observable, computed, action } from 'mobx'

class Router {

    routes = {
        cart: () => <Cart/>,
        order: () => <Order/>,
        result: () => <Result/>,
    }


    @observable activeRoute = 'cart'

    @computed get component(){
        if(this.routes[this.activeRoute]){
            return this.routes[this.activeRoute]()
        }
        return <ErrorPage/>
    }

    @action moveTo(route){
        this.activeRoute = route
    }
}

    // decorate(Router, {
    //     activeRoute: observable,
    //     component: computed,
    //     moveTo: action
    // })



export default new Router()
