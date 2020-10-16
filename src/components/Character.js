import React, { useState, useEffect } from 'react'
import Spinner from '../general/Spinner'
import { Link } from 'react-router-dom'
import './scss/character.scss'

const Character = (props) => {
    const [verboton, setVerboton] = useState(true)
    const [renderArray, setRenderArray] = useState([])
    const [final, setFinal] = useState(0)
    const { characters, cargando} = props
    const INCREMENTO = 20
    useEffect(()=>{
        setFinal( final + INCREMENTO)
        traerData()
    }, [characters])
    const traerData = () => {
        if (characters.length) {
            setRenderArray(characters.slice(0, final))
        }  
    }
    // traerData()
    const moreCharacters = () =>{
        setVerboton(false)
        traerData()
        if ( final+INCREMENTO >= characters.length-1 ) {
            setFinal(characters.length)
        } else {
            setFinal( final+INCREMENTO ) 
        }
        if (final < characters.length) {
            setTimeout(() => setVerboton(true), 100)
        } 
    }
    return (
      <>
        <ul className="container_gallery">
        {(renderArray) && (renderArray.map(character => (
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
        {cargando && (
            <Spinner />
        )}
        { (verboton) && (
            <button onClick={() => moreCharacters()}>
                Load more
            </button>
        )}
    </>
    )
}

export default Character

