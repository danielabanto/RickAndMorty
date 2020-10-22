import React from 'react'
import './scss/footer.scss'
import github from '../img/github.svg'

const Footer = () => {
    return(
        <footer>
            <a href="https://danielabanto.github.io/" target="_blank">
                <p>Made by Daniel Abanto</p>
            </a>
            <a href="https://github.com/danielabanto" target="_blank">
                <img src={github}/>
            </a>
            
        </footer>
    )
}

export default Footer