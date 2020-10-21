import React, { useEffect } from 'react'
import './scss/detailLocation.scss'
import ConectCharacter from './ConectCharacter'
import { connect } from 'react-redux'
import * as characterActions from '../actions/characterActions'

const DetailLocation = (props) => {

    useEffect(() => {
        if(!props.characters.length){
            traerData() 
        }
    }, [])

    const traerData = async () =>{
        await props.traerTodos()
    }

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
                <div className="DetailLocation_character_container">
                {location.residents.map((character, count) => (
                    <ConectCharacter 
                        key = {count}
                        id = {character.split('https://rickandmortyapi.com/api/character/')[1]} 
                    />
                ))}
                </div>
                {/* {location.residents.map((character, count)=>(
                    <span key={count}>{character.split('https://rickandmortyapi.com/api/character/')[1]}  . </span>
                ))} */}
            </details>
            <div className="go_back_container">
                <p><a className="go_back" onClick={props.history.goBack}>Regresar</a></p>
            </div>
        </div>
    )
}

const mapStateToProps = ({characterReducer}) => characterReducer
const mapDispatchToProps = {
    ...characterActions
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailLocation)
