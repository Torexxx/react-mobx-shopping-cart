import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Provider } from "mobx-react"
import stores from '~s'

ReactDOM.render(
    <Provider stores = { stores } >
        <App />
    </Provider>,
    document.getElementById('app'))