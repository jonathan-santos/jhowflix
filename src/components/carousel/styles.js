import styled from 'styled-components'

const Container = styled.section`
  color: white;
  min-height: 197px;
  margin-bottom: 16px;
`

export const SliderItem = styled.li`
    margin-right: 16px;
    img {
        margin: 16px;
        width: 298px;
        height: 197px;
        object-fit: cover;
    }
`

export default Container
