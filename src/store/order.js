import React from 'react'
import {observable, action, computed} from "mobx"
import Store from "./store"



export default class extends Store{

    // constructor(rootStore){
    //     this.rootStore = rootStore
    // }


    dataOrder = {}

    savedData() {
       let data = { ...this.formData, firstName: {...this.formData.firstName} , total: this.rootStore.cart.total  }
        return data
    }

    @observable formData = {
        firstName: {
            type: 'text',
            value: '',
            label: 'Enter firsName',
            errorText: 'Латинские символ, не менее 2-х',
            validator: val => /^[aA-яЯ ]{2,}$/.test(val),
            valid: null
        },
        email: {
            type: 'text',
            value: '',
            label: 'Enter email',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Собака',
            valid: null

        },
        phone: {
            type: 'text',
            value: '',
            label: 'Enter phone',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText: 'Числа, не менее от 7 до 15',
            valid: null

        },
        agree: {
            type: 'checkbox',
            checked: false,
            label: 'Agree all rules',
            // validator: val => ''.test(val),
            errorText: 'Галочка',
            valid: null
        }
    }

    @computed get data() {
        let data = {}

        for(let name in this.formData){
            data[name] = this.formData[name].value
        }

        return data
    }

    getValue(field){

        if(this.dataOrder[field]){
            return this.dataOrder[field].value //''
        }
        return 'noname!!'
        // return this.formData[field].value
    }


    @action change(key, e) {

        let field = this.formData[key]

            field.value = e.target.value
            if(field.value) {
                field.valid = field.validator(field.value)
                return
            }
        field.valid = e.target.checked
        field.checked =  !field.checked

    }


    @computed get formValid() {
        return Object.values(this.formData).every( field => field.valid)
    }



   send(){
       this.dataOrder = this.savedData()

        for(let val in this.formData) {
            this.formData[val].value = ''
            this.formData[val].valid = null
            this.formData[val].checked = false
        }

        this.rootStore.cart.products = []
    }

}


