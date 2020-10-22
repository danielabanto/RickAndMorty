import React from 'react'
import './scss/home.scss'

const Home = () => {
    return(
        <div className="Home_container">
            <h1>Welcome!</h1>
            <p>
            This website was created in order to connect with the information provided by the Rick&Morty API. <br />
            It has been made with React.js <br/>
            React (class and functional components), React Hooks, webpack, babel, React Router Dom and Redux were used<br/>
            If you have any suggestions to improve the website, I would appreciate if you would let me know. 


            {/* Esta pagina tiene como proposito conectar con la informacion proporcionada por la API de Rick&Morty y presentarla<br/>
            Ésta es una pagina web hecha con React<br/>
            Se utilizó React (componentes clase y funcionales), React Hooks, webpack, babel, React Router Dom y Redux */}
            </p>
        </div>
    )
}

export default Home