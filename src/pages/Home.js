import React from 'react'
import './scss/home.scss'

const Home = () => {
    return(
        <div className="Home_container">
            <h1>¡Bienvenidos!</h1>
            <p>
                Esta pagina tiene como proposito conectar con la informacion proporcionada por la API de Rick&Morty y presentarla<br/>
                Ésta es una pagina web hecha con React<br/>
                Se utilizó React (componentes clase y funcionales), React Hooks, webpack, babel, React Router Dom y Redux
            </p>
        </div>
    )
}

export default Home