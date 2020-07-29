import React from 'react'
import { Title, ExtraLink } from './styles'

const Category = ({ title, extraLink, description, color, style }) => (
    <>
        <Title style={{ ...style, backgroundColor: color || 'red' }}>
            {title}
        </Title>

        {extraLink && 
            <ExtraLink href={extraLink.url} target='_blank'>
                {extraLink.text}  
            </ExtraLink>
        }
    </>
)

export default Category