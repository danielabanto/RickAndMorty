import React from 'react'
import './scss/detailEpisode.scss'

const DetailEpisode = (props) => {
    console.log(props)
    const {state: episode} = props.location
    console.log(episode)
    return(
        <div className="DetailEpisode_container">
            <h1>{episode.name}</h1>
            <h2>Season: {episode.episode.slice(1,3)}</h2>
            <h2>Episode: {episode.episode.slice(4,6)}</h2>
            <p>Air date: {episode.air_date}</p>
            <details>
                <summary>Characters: {episode.characters.length}</summary>
                {episode.characters.map((character, count) => (
                    <span key={count}>{character.split('https://rickandmortyapi.com/api/character/')[1]}  . </span>
                ))}
            </details>
            <div className="go_back_container">
                <a className="go_back" onClick={props.history.goBack}>Regresar</a>
            </div>
        </div>
    )
}

export default DetailEpisode
