import React from 'react'
import PropTypes from 'prop-types'
import SlickSlider from 'react-slick'

import Container from './styles'

const Slider = ({ arrowColor, children }) => (
  <Container arrowColor={arrowColor}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 400,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
      focusOnSelect: true
    }}
    >
      {children}
    </SlickSlider>
  </Container>
)

Slider.defaultProps = {
  arrowColor: '',
  children: null
}

Slider.propTypes = {
  arrowColor: PropTypes.string,
  children: PropTypes.any
}

export default Slider
