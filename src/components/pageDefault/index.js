import React from 'react'
import PropTypes from 'prop-types'

import Main from './styles'

import Menu from '../../components/menu'
import Footer from '../../components/footer'
import Error from '../../components/error'

const PageDefault = ({ noPadding, children, error }) => (
  <>
    <Menu />
    <Main noPadding={noPadding && !error}>
      {error
        ? <Error code={error} />
        : <>
          {children}
        </>
      }
    </Main>
    <Footer />
  </>
)

PageDefault.defaultProps = {
  noPadding: false,
  error: 0
}

PageDefault.propTypes = {
  noPadding: PropTypes.bool,
  children: PropTypes.any.isRequired,
  error: PropTypes.number
}

export default PageDefault
