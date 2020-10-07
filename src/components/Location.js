import React from 'react'
import Spinner from '../general/Spinner'
import { Link } from 'react-router-dom'
import './scss/location.scss'

const Location = (props) => {
    const { data, maxPage, page, loading } = props.state
    const { fetchData } = props
   return(
    <>
    <ul className="Location_container">
        {data.results.map((location) => (
            <Link 
                to={{
                    pathname: `/location/${location.id}`,
                    state: location
                }} 
                key={location.id}
            >
            <li>
                <h2>{location.name}</h2>
                <p>{location.type}</p>
                <p>{location.dimension}</p>
            </li>
            </Link>
        ))}
    </ul>
    { loading && (
        <Spinner/> 
    )}
    { (maxPage >=page && !loading) && (
        <button onClick={() => fetchData()}>Load more</button>
    )}
    </>
   ) 
}

export default Location

