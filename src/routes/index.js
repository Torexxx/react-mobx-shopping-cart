import Cart from '~p/cart'
import Order from '~p/order'
import Result from '~p/result'
import Page404 from '~p/error404'
import Post from '~p/post'
import ProductsList from '~p/products/list'
import ProductItem from "~p/products/item"



let routes = [

     {
         name: 'home',
         url: '/',
         component: ProductsList,
         exact: true,

     },
    {
        name: 'cart',
        url: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: 'order',
        url: '/order',
        component: Order,
        exact: true
    },
    {
        name: 'result',
        url: '/done',
        component: Result,
        exact: true
    },
    {
        name: 'blogPost',
        url: '/news/:url',
        component: Post,
        exact: true
    },
    {
        name: 'product',
        url: '/products/:id',
        component: ProductItem,
        exact: true
    },
    {
        url: '**',
        component: Page404,

    },
]



let routesMap = {}
    routes.forEach( route => {
        if(route.hasOwnProperty('name')){
            routesMap[route.name] = route.url

        }

    })

let links = [
    {
        name:'Home' ,
        to:  routesMap.home
    },
    {
        name:'Cart' ,
        to:  routesMap.cart
    },
    {
        name:'Order' ,
        to:  routesMap.order
    }
]

let urlBuilder = function (name, params) {

    if(!routesMap.hasOwnProperty(name)){
        return null
    }
    let url = routesMap[name]

    for(let key in params) {
        url = url.replace( ':' + key, params[key]  )
    }

    return url
}




export default routes
export {routesMap, urlBuilder, links}