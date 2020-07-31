import React from 'react'
import PropTypes from 'prop-types'

import Container from './styles'

const getYouTubeId = (url) => {
  return url.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7'
  )
}

const Video = ({ title, url, categoryColor }) => {
  const image = `https://img.youtube.com/vi/${getYouTubeId(url)}/hqdefault.jpg`
  return (
    <Container
      url={image}
      href={url}
      target='_blank'
      style={{ borderColor: categoryColor }}
      title={title}
    >
      {title}
    </Container>
  )
}

Video.defaultProps = {
  categoryColor: 'transparent'
}

Video.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  categoryColor: PropTypes.string
}

export default Video
