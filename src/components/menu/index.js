import React from 'react'

import Button from '../button'

import Logo from '../../assets/img/logo.png'
import './menu.css'

const Menu = () => (
    <nav className='menu'>
        <a href='/'>
            <img src={Logo} alt='JhowFlix logo' className='logo' />
        </a>

        <Button as='a' href='/new-video'>
            New video
        </Button>
    </nav>
)

export default Menu