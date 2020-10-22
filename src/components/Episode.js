import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../general/Spinner'
import './scss/episode.scss'

const Episode = (props) => {
    const {episodes, cargando, error} = props
    const [indice, setIndice]  = useState('')
    const handleClick = (e) => {
        setIndice(e.target.name)
        const temporadas = document.querySelectorAll('.temporadas_num')
        for (let i=0; i<temporadas.length; i++){
            temporadas[i].style.backgroundColor = ''
        }
        e.target.style.backgroundColor = '#FF00FF'  
    }
    useEffect(() => {
        //ACA TENEMOS QUE HACER EL CAMBIO
        const imagen = document.getElementById('temporada_portada')
        if (imagen) {
            switch (indice) {
                case '1': 
                    imagen.setAttribute('src', `https://www.formulatv.com/images/series/posters/1500/1524/1_m3.jpg`)
                    break
                case '2': 
                    imagen.setAttribute('src', `https://hri45q.ch.files.1drv.com/y4mLXnj0WDfo5J-4NhFrjg772qebBV7nIIL79Bbr6Ur2pCfhoo_No9VMB7UGXI7S7yVbFICPacHPz54JIRfrlSuyhDw0hxsJ35bgD-tk8IY2ke5bi4zcyboll9YdWOwiFwxguwU8GzT6Ld5PWCUcOsibzfgLHoIsTbJkCrGV7B1NuvLKMNPF5uJlsxSm2P9iChhYi-lPG8fDOZma7xLgXooYQ?width=250&height=371&cropmode=none`)
                    break
                case '3': 
                    imagen.setAttribute('src', `https://www.formulatv.com/images/series/posters/1500/1524/3_m3.jpg`)
                    break
                case '4': 
                    imagen.setAttribute('src', `https://www.formulatv.com/images/series/posters/1500/1524/4_m3.jpg`)
                    break
                default: {imagen.setAttribute('src', `https://hri45q.ch.files.1drv.com/y4mLXnj0WDfo5J-4NhFrjg772qebBV7nIIL79Bbr6Ur2pCfhoo_No9VMB7UGXI7S7yVbFICPacHPz54JIRfrlSuyhDw0hxsJ35bgD-tk8IY2ke5bi4zcyboll9YdWOwiFwxguwU8GzT6Ld5PWCUcOsibzfgLHoIsTbJkCrGV7B1NuvLKMNPF5uJlsxSm2P9iChhYi-lPG8fDOZma7xLgXooYQ?width=250&height=371&cropmode=none`)}
            }
        }
    }, [indice])
    if (error) {return <h3>Ocurrió un error: {error}</h3>}
    return(
    <div className="Episode_container">
        {(cargando) && < Spinner />} 
        <div className="Episode_Temporadas">
            <p>Seasons: </p>
            {Object.keys(episodes).map((nro) => (
                <a
                    className="temporadas_num"
                    key={nro}
                    onClick={(e)=>handleClick(e)} 
                    name={nro}
                >
                    {nro}
                </a>
            )) }
        </div>
        <div className="Episode_capitulos">
            { !indice ? <p className="Episode_seleccione"></p> : (
                <>
                    <figure>
                        <img src='' id="temporada_portada"/>
                    </figure>
                    <ul>
                    {Object.keys(episodes[indice]).map((num) => (
                        <Link 
                            to={{
                                pathname: `/episode/${episodes[indice][num].id}`,
                                state: episodes[indice][num]
                            }} 
                            key={episodes[indice][num].id}
                        >
                        <li>
                            <p><b>Episode {episodes[indice][num].episode.slice(4,6)}: </b>
                            {episodes[indice][num].name}</p>
                        </li>
                        </Link>
                    ))}                            
                    </ul>
                </>
                )
            }
        </div>
    </div>
    )
}

export default Episode
