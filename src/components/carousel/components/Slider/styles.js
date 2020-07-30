import styled from 'styled-components'

const Container = styled.ul`
    padding: 0;
    margin: 0;
    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 40px;
        height: 100%;
        transform: initial;
        &:before {
            border-radius: 100%;
            background-color: rgba(0,0,0, 0.15);
            color: ${props => props.arrowColor || 'initial'};
            font-size: 30px;
            line-height: 30px;
        }

        &:hover,
        &:focus,
        &:active {
            background-color: rgba(0,0,0, 0.4);
        }
    }

    .slick-prev {
        left: 0px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .slick-next {
        right: 0px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
`

export default Container
