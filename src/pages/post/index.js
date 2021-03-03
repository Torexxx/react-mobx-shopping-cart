import React from 'react'

export default function(props)  {

        // console.log(props.match.params)
        return (

          <div>Post #{props.match.params.url}</div>
        )


}