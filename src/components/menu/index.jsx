import React from 'react'

import ButtonLink from '../button-link/index.jsx'

import Logo from '../../assets/img/logo.png'
import './menu.css'

const Menu = () => (
    <nav className='menu'>
        <a href='/'>
            <img src={Logo} alt='JhowFlix logo' className='logo' />
        </a>

        <ButtonLink href='/new-video'>
            New video
        </ButtonLink>
    </nav>
)

export default Menu