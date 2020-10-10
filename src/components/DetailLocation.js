import React from 'react'
import './scss/detailLocation.scss'

const DetailLocation = (props) => {
    const {state: location} = props.location
    console.log(location)
    return(
        <div className="DetailLocation_container">
            <h2>{location.name}</h2>
            <h3>Type: {location.type}</h3>
            <h3>Dimension: {location.dimension}</h3>
            <p>Created: {location.created.split('T')[0]}</p>
            <details>
                <summary> Residents: {location.residents.length}</summary>
                {location.residents.map((character, count)=>(
                    <span key={count}>{character.split('https://rickandmortyapi.com/api/character/')[1]}  . </span>
                ))}
            </details>
            <div className="go_back_container">
                <p><a className="go_back" onClick={props.history.goBack}>Regresar</a></p>
            </div>
        </div>
    )
}

export default DetailLocation
