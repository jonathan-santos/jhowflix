import React from 'react'

import { VideoCardGroupContainer } from './styles'
import VideoCard from './components/VideoCard'
import Slider, { SliderItem } from './components/Slider'

import Category from '../category'

const VideoCardGroup = ({ ignoreFirstVideo, category }) => {
  const categoryTitle = category.title
  const categoryColor = category.color
  const categoryExtraLink = category.extra_link
  const videos = category.videos

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <Category title={categoryTitle} description={categoryExtraLink} />
      )}

      <Slider arrowColor={categoryColor}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

export default VideoCardGroup
