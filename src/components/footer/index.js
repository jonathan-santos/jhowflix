import React from 'react'

import { FooterBase } from './styles'

const Footer = () => (
  <FooterBase>
    <p>
      Website made with reactJS by <a href='https://twitter.com/pipocaCafeinada' rel='noopener'>Jhow</a>
    </p>

    <p>
      Curious to see how this site was created?
      <br />
      <a href='https://github.com/jonathan-santos/jhowflix' rel='noopener'>Access it&apos;s repository</a>
    </p>

    <p>
      Proudly created during
      {' '}
      <a href='https://www.alura.com.br/' rel='noopener'>
        Imersão React da Alura
      </a>
    </p>
  </FooterBase>
)

export default Footer
