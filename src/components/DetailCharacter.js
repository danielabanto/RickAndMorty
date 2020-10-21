import React from 'react'
import './scss/detailCharacter.scss'

const DetailCharacter = (props) => {

    const data = props.location.state

    return(
        <div className="DetailCharacter_container" >
            <div className="DetailCharacter_info_container">
                <figure className="DetailCharacter_figure">
                    <img src={data.image}/>
                </figure>
                <div className="DetailCharacter_content">
                    <h2>{data.name}</h2>
                    <p>Gender: {data.gender}</p>
                    <p>Origin: {data.origin.name}</p>
                    <p>Location: {data.location.name}</p>
                    <p>Specie: {data.species}</p>
                    <p>Status: {data.status}</p>
                    <details>
                        <summary className="DetailCharacter_summary">Episodes: {data.episode.length}</summary>
                        {data.episode.map((episode, num)=>(
                            <span key={num}>{episode.split('https://rickandmortyapi.com/api/episode/')[1]}  .  </span>  
                        ))}
                        
                    </details>
                </div>
            </div>
            <div className="go_back_container">
                <p><a className="go_back" onClick={props.history.goBack}>Regresar</a></p>
            </div>
        </div>
    )
}

export default DetailCharacter
