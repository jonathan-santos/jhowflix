import React from 'react'

import './button-link.css'

const ButtonLink = (props) => (
    <a href={props.href} className='button-link'>
        {props.children}
    </a>
)

export default ButtonLink