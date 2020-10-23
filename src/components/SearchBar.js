import React from 'react'
import { Link } from 'react-router-dom'
import './scss/searchBar.scss'

const SearchBar = (props) => {
    const { arrayBusqueda, busqueda } = props
    return(
        <>
        <div className="SearchBar_container">
            <input
                name="character_input" 
                placeholder="Ingresa nombre del personaje"
                onChange={props.handleChange}
                value={busqueda}
                autoComplete= "off"
            />
        </div>
        {(busqueda)&&(
            <ul className="container_gallery">
            {(arrayBusqueda) && (arrayBusqueda.map(character => (
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
            )))}
            </ul>
        )}
        
        </>
    )
}

export default SearchBar