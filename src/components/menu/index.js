import React from 'react'
import { Link } from 'react-router-dom'

import Container, { Logo } from './styles'

import Button from '../../components/button'

import LogoFile from '../../assets/img/logo.png'

const Menu = () => (
  <Container className='menu'>
    <Link to='/'>
      <Logo src={LogoFile} alt='JhowFlix logo' className='logo' />
    </Link>

    <Button as={Link} to='/new-video'>
            New video
    </Button>
  </Container>
)

export default Menu
