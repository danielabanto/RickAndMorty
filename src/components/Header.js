import React, {Fragment, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
import hamburger from '../img/hamburger.jpg'
import './scss/header.scss'

const Header = () => {
    const [scrolledY, setScrolledY] = useState(false)
    useEffect(()=>{
        window.onscroll = () =>{
            if (window.scrollY > 60 && !scrolledY) {
                setScrolledY(true)
                console.log(scrolledY)
                cambiar()
            }
            if (window.scrollY <= 60 && scrolledY) {
                setScrolledY(false)
                console.log(scrolledY)
                cambiar()
            }
        }
    },[scrolledY])
    const cambiar = () => {
        const header = document.querySelector('.header')
        const header_img = document.querySelector('.header_img')
        // const header_list_element = document.querySelector('.header_list_element')
        if (!scrolledY) {
            header.classList.add('scroll_header')
            header_img.classList.add('scroll_header_img')
            // header_list_element.classList.add('scroll_header_list_element')
        } else {
            header.classList.remove('scroll_header')
            header_img.classList.remove('scroll_header_img')
            // header_list_element.classList.remove('scroll_header_list_element')
        }
    }

    const handleclick = () => {
        console.log('click')
        const header_list = document.querySelector('.header_list')
        header_list.classList.toggle('flex')
    }
    return(
        <Fragment>
            <header className="header">
                <div className="container_header">
                    <img className="header_img"src={logo} alt="Rick_y_Morty"/>
                    <img id="hamburger" src={hamburger} onClick={handleclick}/>
                    <ul className="header_list">
                        <li className="header_list_element"><NavLink exact activeClassName="activo" onClick={handleclick} to='/'>HOME</NavLink></li>
                        <li className="header_list_element"><NavLink activeClassName="activo" onClick={handleclick} to='/characters'>CHARACTERS</NavLink></li>
                        <li className="header_list_element"><NavLink activeClassName="activo" onClick={handleclick} to='/episodes'>EPISODES</NavLink></li>
                        <li className="header_list_element"><NavLink activeClassName="activo" onClick={handleclick} to='/locations'>LOCATIONS</NavLink></li>
                    </ul>
                </div>
            </header>
        </Fragment>
    )
}

export default Header