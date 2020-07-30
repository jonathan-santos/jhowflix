import styled from 'styled-components'

export const VideoCardContainer = styled.a`
  position: relative;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: transparent;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    z-index: -1;
    transition: opacity .3s;
  }
  
  &:hover,
  &:focus,
  &:active {
    color: inherit;
    text-shadow: 1px 1px black;
    
    &::before {
      opacity: 0.5;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`
