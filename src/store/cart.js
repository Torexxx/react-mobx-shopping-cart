import { observable, computed, action } from 'mobx'
import Store from "./store"


export default class extends Store {


    // constructor(rootStore){
    //     this.rootStore = rootStore
    // }


    @observable products = []

    @computed get productsInCart(){
        return this.products.length
    }

    @computed get total(){   //computed пересчитывается, когда меняется observable!!!

        return this.productsDetailed.reduce((acc, pr) => {
            // let product = productsStore.getById(pr.id)

            return acc + pr.price * pr.cnt
        },0)
    }

    @computed get productsDetailed(){
        return this.products.map( p => {
            let product = this.rootStore.products.getById(p.id)
            return { ...product, cnt: p.cnt}}
        )
    }

        @computed get inCart(){
        return (id) => {
            return this.products.some( pr => pr.id === id )
        }
    }

    @action change(cnt, id){
        let index = this._getIndexById(id)
        if(index !== -1) {
            this.products[index].cnt = cnt
        }

            //или
        // this.products.forEach(pr => {
        //     if(pr.id.toString() === id.toString()){
        //         pr.cnt = cnt
        //     }
        // })
    }




    @action add(id){
console.log(this)
         new Promise((res, rej) => {
            setTimeout(()=> {
                res()
            }, 1000)
        }).then(()=> {
            // debugger
            this.products.push({ id, cnt: 1})
        }).catch((err)=> {
            throw new Error(err)
         })


        // let product = productsStore.getById(id)   ///2 склада ссылаются на один объект? опасно!
        // let copyProduct = { ...product, cnt: 1}

    }

    @action remove(id){
        console.log('remove')
        new Promise((res) => {
            setTimeout(()=> {res()},1000)
        }).then(()=> {
            debugger
            let index = this._getIndexById(id)
            if(index !== -1) {
                this.products.splice(index, 1)
            }
        }).catch((err)=> {
            throw new Error(err)
        })



            // или
            // this.products = this.products.filter( pr => pr.id.toString() !== id.toString() )
    }


    _getIndexById(id) {
        let index = this.products.findIndex(pr => pr.id === id)
            return index
    }

  //   @computed get changeOn() {
  //
  //       return this.products.map( (product, i) => {
  //
  //           return cnt => this.change(i, cnt)
  //       })
  // }


    // @computed get removeOn() {
    //
    //     return this.products.map( (product, i) => {
    //         return () => this.remove(i)
    //     })
    //
    // }
}


// let product = {}
// let products = getProducts()
// products.forEach( pr => {
//     if(pr.hasOwnProperty('id')){
//         product[pr.id] = pr
//     }
// })



