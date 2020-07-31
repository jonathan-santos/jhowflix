import React from 'react'
import { Route, Link } from 'react-router-dom'

import Container, { Logo } from './styles'

import Button from '../../components/button'

import LogoFile from '../../assets/img/logo.png'

const Menu = () => (
  <Container className='menu'>
    <Link to='/'>
      <Logo src={LogoFile} alt='JhowFlix logo' className='logo' />
    </Link>

    <Route path='/' exact>
      <Button as={Link} to='/new/video'>
        New video
      </Button>
    </Route>

    <Route path='/new/video' exact>
      <Button as={Link} to='/new/category'>
        New category
      </Button>
    </Route>
  </Container>
)

export default Menu
