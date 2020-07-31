import styled from 'styled-components'

const IFrame = styled.iframe`
    max-width: 100%;
    min-height: 15rem;
    max-height: 28.5rem;
    overflow: hidden;

    @media(max-width: 600px) {
        min-height: 15rem;
        max-height: 10rem;
        height: 10rem;
    }
`

export default IFrame
