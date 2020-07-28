import React from 'react'
import styled from 'styled-components';

import Menu from '../menu'
import Footer from '../footer'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
`;

const PageDefault = ({ children }) => (
    <>
        <Menu />
        <Main>
            {children}
        </Main>
        <Footer/>
    </>
)

export default PageDefault