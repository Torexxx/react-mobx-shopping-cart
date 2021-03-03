import CartStore from './cart'
import OrderStore from './order'
import ProductStore from './products'



class RootStore {
    constructor() {
        this.products = new ProductStore(this)
        this.cart = new CartStore(this)
        this.order = new OrderStore(this)
    }
}

export default new RootStore()