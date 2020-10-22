import React, { useEffect} from 'react'
import { connect } from 'react-redux'
import Episode from '../components/Episode'
import * as episodeActions from '../actions/episodeActions'

const Episodes = (props) => {
    useEffect( () => {
        if (!props.episodes.length){
            props.traerTodos()
        }        
    },[]) 
    // let temporadas = undefined
    // if (Object.keys(props.episodes).length>0) {temporadas = Math.max(...Object.keys(props.episodes))}
    // console.log(temporadas)
    let data = {}
    if (props.episodes.length) {
        const vacio = {}
        data = props.episodes[1]
    }
    return(
        <Episode 
            episodes={data} 
            cargando={props.cargando}
            error={props.error} 
        />
    )
}

const mapStateToProps = (reducers) => {
    return reducers.episodeReducer
}
const mapDispatchToProps = {
    ...episodeActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes)
