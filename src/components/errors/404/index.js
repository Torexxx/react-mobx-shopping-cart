import React from 'react'
import { Link } from 'react-router-dom'
import { routesMap } from "~/routes"


export default () =>  {

        return (
            <>
                <h1>Error 404</h1>
                <h2>Oops, something went wrong...</h2>
                <p>This page dosen't exist</p>
                    <hr/>
                <div className='alert alert-warning'>
                    <p><Link to={routesMap.home}>Вернуться на главную</Link></p>
                </div>

            </>
        )

}