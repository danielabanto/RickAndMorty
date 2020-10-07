import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './scss/episode.scss'
import imagen1 from '../img/temporada1.jpg'
import imagen2 from '../img/temporada2.jpg'
import imagen3 from '../img/temporada3.jpg'
import imagen4 from '../img/temporada4.jpg'

const Episode = (props) => {
    const {data, maxPage, page, nro_temporadas} = props.state
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
                    imagen.setAttribute('src', `${imagen1}`)
                    break
                case '2': 
                    imagen.setAttribute('src', `${imagen2}`)
                    break
                case '3': 
                    imagen.setAttribute('src', `${imagen3}`)
                    break
                case '4': 
                    imagen.setAttribute('src', `${imagen4}`)
                    break
                default: {imagen.setAttribute('src', `${imagen1}`)}
            }
        }
    }, [indice])
    return(
    <div className="Episode_container">
        <div className="Episode_Temporadas">
            <p>Seasons: </p>
            {Object.keys(data).map((nro) => (
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
                    {Object.keys(data[indice]).map((num) => (
                        <Link 
                            to={{
                                pathname: `/episode/${data[indice][num].id}`,
                                state: data[indice][num]
                            }} 
                            key={data[indice][num].id}
                        >
                        <li>
                            <b>Episode {data[indice][num].episode.slice(4,6)}: </b>
                            {data[indice][num].name}
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
