import styled from 'styled-components'

const padding = props => props.noPadding
  ? '0'
  : '0.5rem 20%'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: ${padding};

    @media (max-width: 600px) {
        padding: ${padding};
    }
`

export default Main
