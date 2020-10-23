import React, { useState, useEffect } from 'react'
import Spinner from '../general/Spinner'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import './scss/character.scss'

const Character = (props) => {
    const [verboton, setVerboton] = useState(true)
    const [montado, setMontado] = useState(false)
    const [renderArray, setRenderArray] = useState([])
    const [final, setFinal] = useState(0)
    const { characters, cargando, error} = props
    const INCREMENTO = 20
    useEffect(()=>{
        if (characters) {
            setMontado(true)
        }
    },[])
    useEffect(()=>{
        if (characters.length && montado){
            setFinal( final + INCREMENTO)
        }
    }, [characters, montado])
    useEffect(()=>{
        traerData()
    },[final])
    
    const traerData = () => {
        if (characters.length) {
            setRenderArray(characters.slice(0, final))
        }  
    }
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

    //Barra de busqueda
    const [busqueda, setBusqueda] = useState('')
    const [arrayBusqueda, setArrayBusqueda] = useState([])
    const handleChange = (e) => {
        setBusqueda(e.target.value)
    }
    useEffect(()=>{
        (characters.length) &&(
            setArrayBusqueda(characters.filter((character)=>{
                const {name} = character
                const search_name = name.toLowerCase()
                const search_busqueda = busqueda.toLowerCase()
                return search_name.includes(search_busqueda)
            }
            ))
        )
    },[busqueda])

    if (error) {return <h3>Ocurrió un error: {error}</h3>}
    return (
      <>
        <SearchBar 
            handleChange={handleChange} 
            busqueda={busqueda}
            arrayBusqueda = {arrayBusqueda}
        />
        {(!busqueda)&&(
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
        )}
        
    </>
    )
}

export default Character

