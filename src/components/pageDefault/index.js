import React from 'react'
import PropTypes from 'prop-types'

import Main from './styles'

import Menu from '../menu'
import Footer from '../footer'

const PageDefault = ({ noPadding, children }) => (
  <>
    <Menu />
    <Main noPadding={noPadding}>
      {children}
    </Main>
    <Footer />
  </>
)

PageDefault.defaultProps = {
  noPadding: false
}

PageDefault.propTypes = {
  noPadding: PropTypes.bool,
  children: PropTypes.any.isRequired
}

export default PageDefault
