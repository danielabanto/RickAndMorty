import React from 'react'
import Spinner from '../general/Spinner'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './scss/conectEpisode.scss'

const ConectEpisode = (props) => {
    const {id} = props
    let episode = {}
    if (props.episodes.length){
        episode = props.episodes[0].find((element)=> element.id == id)
    }
    return(
        <>
            {(props.error) && (<p>{error}</p>) }
            {(props.cargando) && (<Spinner />)}
            {(Object.keys(episode).length)&&(
                <Link 
                    to={{
                        pathname: `/episode/${episode.id}`,
                        state: episode
                    }} 
                    key={episode.id}
                    className="ConectEpisode_div"
                >
                    <span>S{parseInt(episode.episode.slice(1,3))}-E{episode.episode.slice(4,6)}</span>
                </Link>
            )}
            
        </>
    )
}
const mapStateToProps = ({episodeReducer}) => episodeReducer
export default connect(mapStateToProps)(ConectEpisode)