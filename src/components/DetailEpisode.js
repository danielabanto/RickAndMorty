import React from 'react'
import './scss/detailEpisode.scss'

const DetailEpisode = (props) => {
    console.log(props)
    const {state: episode} = props.location
    console.log(episode)
    return(
        <div className="DetailEpisode_container">
            <h2>{episode.name}</h2>
            <h3>Season: {episode.episode.slice(1,3)}</h3>
            <h3>Episode: {episode.episode.slice(4,6)}</h3>
            <p>Air date: {episode.air_date}</p>
            <details>
                <summary>Characters: {episode.characters.length}</summary>
                {episode.characters.map((character, count) => (
                    <span key={count}>{character.split('https://rickandmortyapi.com/api/character/')[1]}  . </span>
                ))}
            </details>
            <div className="go_back_container">
                <p><a className="go_back" onClick={props.history.goBack}>Regresar</a></p>
            </div>
        </div>
    )
}

export default DetailEpisode
