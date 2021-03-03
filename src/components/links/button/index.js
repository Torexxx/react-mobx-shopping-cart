import React from 'react'
import { withRouter } from "react-router-dom"

 function LinkButton(props) {
    const {
        to,
        location,
        history,
        staticContext,
        match,
        ...other

    } = props
    return <button {...other} onClick = { () => { history.push(to) } }
    />
}


export default withRouter(LinkButton)