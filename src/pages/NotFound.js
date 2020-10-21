import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import './scss/notFound.scss'

const NotFound = () => {
    const [cambio, setCambio] = useState(false)
    const [count, setCount] = useState(5)
    useEffect(()=>{
        setTimeout(()=>{
            setCambio(true)
            
        }, 5000)
        if (count != 0){
            setTimeout(()=>{
                setCount( count - 1 )
            }, 1000)
        }
    },[count])
    if (cambio) {
        return < Redirect to='/'/>
    }
    return(
        <div className="NotFound_container">
            <h1>Ups! Not found</h1><br />
            <h2>Redirecting in {count}</h2>
        </div>
    )
}

export default NotFound
