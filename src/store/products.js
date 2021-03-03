//yarn add @babel/plugin-proposal-decorators -D
//yarn add mobx mobx-react
import { observable, computed } from 'mobx'
import Store from './store'

export default class extends Store {

    // constructor(rootStore){
    //     this.rootStore = rootStore
    // }


    @observable products = getProducts()

    @computed get productsMap() {

        let map = {}

        this.products.forEach((pr, i) => {
            map[pr.id.toString()] = i
        })
        return map

        //{ 100: 0, 101: 1 }
    }

    getById(id) {
// debugger
        let index = this.productsMap[id]

        if(index === undefined) {
            return null
        }
        return this.products[index]

        // find
        // filter
        // findIndex
        //


        // return this.products.find( p => p.id.toString() === id.toString())


        // return this.products.find(p => {
        //     if(p.id.toString() === id.toString()) {
        //         return p
        //     }
        // })


        // return this.products.filter( p => p.id.toString() === id.toString())[0]

        // return this.products[this.products.findIndex(p => p.id.toString() === id.toString() )]




        //      let product = {}
        //     this.products.forEach( pr => {
        //         if(pr.id === id){
        //             product = pr
        //         }
        //     })
        //      return product
        // }
    }

}

// decorate(Cart, {
//     products: observable,
//     total: computed,
//     change: action,
//     remove: action,
// })



function getProducts() {
    return [
        {
            id: 100,
            title: "Nokia",
            price: 12000,
            rest: 30,

        },
        {
            id: 101,
            title: "Samsung",
            price: 22000,
            rest: 25,

        },
        {
            id: 102,
            title: "Sony Ericson",
            price: 9000,
            rest: 20,

        },
        {
            id: 103,
            title: "Alkatel",
            price: 2000,
            rest: 15,
        },
    ]
}

