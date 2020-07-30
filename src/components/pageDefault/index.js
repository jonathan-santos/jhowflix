import React from 'react'

import Menu from '../menu'
import Footer from '../footer'

import Main from './styles'

const PageDefault = ({ noPadding, children }) => (
  <>
    <Menu />
    <Main noPadding={noPadding}>
      {children}
    </Main>
    <Footer/>
  </>
)

export default PageDefault
