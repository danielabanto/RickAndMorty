import React, { useEffect } from 'react'
import ConectCharacter from './ConectCharacter'
import { connect } from 'react-redux'
import * as characterActions from '../actions/characterActions'
import './scss/detailEpisode.scss'

const DetailEpisode = (props) => {

    useEffect(() => {
        if(!props.characters.length){
            traerData() 
        }
    }, [])

    const traerData = async () =>{
        await props.traerTodos()
    }

    // console.log(props)
    const {state: episode} = props.location
    return(
        <div className="DetailEpisode_container">
            <h2>{episode.name}</h2>
            <h3>Season: {episode.episode.slice(1,3)}</h3>
            <h3>Episode: {episode.episode.slice(4,6)}</h3>
            <p>Air date: {episode.air_date}</p>
            <details open>
                <summary>Characters: {episode.characters.length}</summary>
                <div className="DetailEpisode_character_container">
                {episode.characters.map((character, count) => (
                    <ConectCharacter 
                        key = {count}
                        // cargando = {props.cargando}
                        // error = { props.error } 
                        // character = { props.characters.find((element)=>{element.id == character.split('https://rickandmortyapi.com/api/character/')[1] })}
                        id = {character.split('https://rickandmortyapi.com/api/character/')[1]} 
                    />
                ))}
                </div>
                
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailEpisode)
