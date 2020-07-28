import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 2rem;
`

const Title = styled.h1`
    margin: 0;
    font-size: 4rem;
`

const P = styled.p`
    margin: 0.25em 0;
`

const page404 = () => {
    return (
        <Container>
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

            <br/>

            <Link to='/'>Or go to home</Link>
        </Container>
    )
}

export default page404