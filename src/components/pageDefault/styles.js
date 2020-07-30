import styled from 'styled-components'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: ${props => props.noPadding ? '0' : '0.5rem 30%'};

    @media (max-width: 600px) {
        padding: ${props => props.noPadding ? '0' : '0.5rem 1rem'};
    }
`

export default Main
