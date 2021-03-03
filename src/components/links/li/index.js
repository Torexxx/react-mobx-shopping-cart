import React from 'react'
import { withRouter } from "react-router-dom"


function LinkLi(props) {


    const {
        location,
        history,
        staticContext,
        match,
        ...other

    } = props

    let path = location.pathname

    return other.links.map((link, i) => {

        let { to, name } = link

            return <li key={name + i}
                        style={{'cursor': 'pointer'}}
                        className={ path === to
                           ? 'list-group-item active'
                           : 'list-group-item'}
                       onClick={() => {
                           if (path !== to) {
                               history.push(to)
                           }
                       }}
                    >
                        { name }
                    </li>
    })
}


export default withRouter(LinkLi)