import React from 'react'
import styled from 'styled-components';

import Menu from '../menu'
import Footer from '../footer'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: ${props => props.noPadding ? '0' : '0.5rem 30%'};

    @media (max-width: 600px) {
        padding: ${props => props.noPadding ? '0' : '0.5rem 1rem'};
    }
`;

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