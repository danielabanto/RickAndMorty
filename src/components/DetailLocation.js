import React from 'react'
import './scss/detailLocation.scss'

const DetailLocation = (props) => {
    const {state: location} = props.location
    console.log(location)
    return(
        <div className="DetailLocation_container">
            <h1>{location.name}</h1>
            <h2>Type: {location.type}</h2>
            <h2>Dimension: {location.dimension}</h2>
            <p>Created: {location.created.split('T')[0]}</p>
            <details>
                <summary> Residents: {location.residents.length}</summary>
                {location.residents.map((character, count)=>(
                    <span key={count}>{character.split('https://rickandmortyapi.com/api/character/')[1]}  . </span>
                ))}
            </details>
            <div className="go_back_container">
                <a className="go_back" onClick={props.history.goBack}>Regresar</a>
            </div>
        </div>
    )
}

export default DetailLocation
