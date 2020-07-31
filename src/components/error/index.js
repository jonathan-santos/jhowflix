import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Title, P } from './styles'

import Game from '../../components/game'

const Error = ({ code }) => {
  let message = ''

  if (code === 404) {
    message = 'Sorry, nothing to see here...'
  } else {
    const areaOfError = code < 400
      ? 'Website'
      : 'Server'

    message = `So... the programmer done something wrong with the ${areaOfError}\n Try reloading the page or complaining to him on twitter:`
  }

  return (
    <>
      <Title>{code}</Title>
      <P>{message}</P>

      <P>Play a game instead:</P>

      <Game />

      <br />

      <Link to='/'>Or go to home</Link>
    </>
  )
}

Error.propTypes = {
  code: PropTypes.number.isRequired
}

export default Error
