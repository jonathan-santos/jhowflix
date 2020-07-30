import React from 'react'
import PropTypes from 'prop-types'

import Category from '../../components/category'

import VideoCard from './components/VideoCard'
import Slider from './components/Slider'

import { VideoCardGroupContainer, SliderItem } from './styles'

const VideoCardGroup = ({ ignoreFirstVideo, category }) => {
  const { title, color, extraLink, videos } = category

  return (
    <VideoCardGroupContainer>
      {title && (
        <Category title={title} description={extraLink} color={color} />
      )}

      <Slider arrowColor={color}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={color}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

VideoCardGroup.defaultProps = {
  ignoreFirstVideo: false
}

VideoCardGroup.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  category: PropTypes.object.isRequired
}

export default VideoCardGroup
