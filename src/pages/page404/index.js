import React from 'react'
import { Link } from 'react-router-dom'

import { Title, P } from './styles'
import PageDefault from '../../components/pageDefault'

const page404 = () => {
  return (
    <PageDefault>
      <Title>404</Title>
      <P>Sorry, nothing to see here...</P>

      <P>Play a game instead:</P>

      <iframe
        title='game'
        src='https://jhow.io/canvasrama/chapter-1-game-prototype/4-game/'
        frameBorder='0'
        className='game'
        width='960'
        height='545'
      />

      <br />

      <Link to='/'>Or go to home</Link>
    </PageDefault>
  )
}

export default page404
