import React from 'react'
import Spinner from '../general/Spinner'
import { Link } from 'react-router-dom'
import './scss/character.scss'

const Character = (props) => {
    const { fetchCharacters } = props
    const { data, loading, page, maxPage } = props.state
    return (
      <>
        <ul className="container_gallery">
        {data.results.map(character => (
            <Link 
                to={{
                    pathname: `/character/${character.id}`,
                    state: character
                }} 
                key={character.id} className="gallery"
            >
            <li>
                <div 
                className="gallery" 
                style={{backgroundImage: `url(${character.image})`}}
                >
                    <div className="gallery_text">
                        <p>{character.name}</p>
                    </div>
                </div>
            </li>
            </Link>
        ))}
        </ul>
        {loading && (
            <Spinner />
        )}
        { (page <= maxPage && !loading) && (
            <button onClick={() => fetchCharacters()}>
                Load more
            </button>
        )}
    </>
    )
}

export default Character

