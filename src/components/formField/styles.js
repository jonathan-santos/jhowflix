import styled from 'styled-components'

const Field = styled.div`
    position: relative;
    display: flex;
`

export const InputContainer = styled.label`
    margin-bottom: 0.75rem;
    width: 100%;
    display: flex;
    align-items: center;
`

export const Input = styled.input`
    flex: 1;
    height: 100%;
    border-radius: 5px;
    padding-left: 0.5rem;
    background-color: var(--white);
    font-size: 1rem;

    &[rows="4"] {
        padding-top: 1.25rem;
    }

    &:not([rows="4"]) {
        height: 3rem;
    }

    &[type="color"] {
        height: 2rem;
        margin-left: 0.5rem;
    }

    &:focus + label,
    &:not([rows="4"]):not([value=""]) + label,
    &[rows="4"]:not(:empty) + label {
        top: 0.25rem;
        font-size: 0.5rem;
    }
`

export const FloatingLabel = styled.label`
    position: absolute;
    pointer-events: none;
    top: 0.6rem;
    left: 5px;
    color: black;
    user-select: none;
    font-size: 1.35rem;
    transition: font-size .1s;
`

export default Field