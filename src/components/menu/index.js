import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../button'

import Logo from '../../assets/img/logo.png'
import './menu.css'

const Menu = () => (
  <nav className='menu'>
    <Link to='/'>
      <img src={Logo} alt='JhowFlix logo' className='logo' />
    </Link>

    <Button as={Link} to='/new-video'>
            New video
    </Button>
  </nav>
)

export default Menu
