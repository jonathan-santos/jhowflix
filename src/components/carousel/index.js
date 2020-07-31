import React from 'react'
import PropTypes from 'prop-types'

import Container, { SliderItem } from './styles'

import Slider from './components/Slider'
import Category from '../../components/category'
import Video from '../../components/video'

const Carousel = ({ ignoreFirstVideo, category }) => {
  const { title, color, extraLink, videos } = category

  return (
    <Container>
      <Category
        title={title}
        description={extraLink}
        color={color}
      />

      <Slider arrowColor={color}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.title}>
              <Video
                title={video.title}
                url={video.url}
                categoryColor={color}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </Container>
  )
}

Carousel.defaultProps = {
  ignoreFirstVideo: false
}

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.object.isRequired
}

export default Carousel
