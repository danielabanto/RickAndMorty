import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as episodeActions from '../actions/episodeActions'
import ConectEpisode from './ConectEpisode'
import './scss/detailCharacter.scss'

const DetailCharacter = (props) => {
    useEffect(()=>{
        if(!(Object.keys(props.episodes).length>0)){
            props.traerTodos()
        }
    },[])
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
                    <details open>
                        <summary className="DetailCharacter_summary">Episodes: {data.episode.length}</summary>
                        <div className="DetailCharacter_episode_container">
                            {data.episode.map((episode, num)=>(
                                <ConectEpisode 
                                    key = {num}
                                    id = {episode.split('https://rickandmortyapi.com/api/episode/')[1]}
                                />
                                // <span key={num}>{episode.split('https://rickandmortyapi.com/api/episode/')[1]}  .  </span>  
                            ))}
                        </div>
                        
                    </details>
                </div>
            </div>
            <div className="go_back_container">
                <p><a className="go_back" onClick={props.history.goBack}>Regresar</a></p>
            </div>
        </div>
    )
}

const mapStateToProps = ({episodeReducer}) => episodeReducer
const mapDispatchToProps = {
    ...episodeActions
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailCharacter)
