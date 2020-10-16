import React from 'react'
import { connect } from 'react-redux'
import Spinner from '../general/Spinner'
import { Link } from 'react-router-dom'
import './scss/conectCharacter.scss'

const ConectCharacter = (props) => {
    const { id } = props 
    let character = {}
    if (props.characters.length) {
        character = props.characters.find((element) => element.id == id)
    }
    
    return(
        <>
        {(props.error) && (<p>{error}</p>) }
        {(props.cargando) && (<Spinner />)}
        {(character) && (
            <Link 
                to={{
                    pathname: `/character/${character.id}`,
                    state: character
                }} 
                key={character.id} className="gallery"
                className="ConectCharacter_div" 
                style={{backgroundImage: `url(${character.image})`}}
            >
                <span>{character.name}</span>
            </Link>
        )}
        </>
    )
}

const mapStateToProps = ({characterReducer}) => characterReducer

export default connect(mapStateToProps)(ConectCharacter)