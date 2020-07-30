import React from 'react'
import PropTypes from 'prop-types'

import { Title, ExtraLink } from './styles'

const Category = ({ title, extraLink, description, color, style }) => (
  <>
    <Title style={{ ...style, backgroundColor: color }}>
      {title}
    </Title>

    {extraLink &&
      <ExtraLink href={extraLink.url} target='_blank'>
        {extraLink.text}
      </ExtraLink>}
  </>
)

Category.defaultProps = {
  extraLink: '',
  description: '',
  color: '#000000',
  style: {}
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  extraLink: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default Category
