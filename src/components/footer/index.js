import React from 'react'
import { FooterBase } from './styles'

const Footer = () => (
  <FooterBase>
    <a href='https://www.alura.com.br/'>
      <img src='https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg' alt='Logo Alura' />
    </a>

    <p>
      Proudly created during
      {' '}
      <a href='https://www.alura.com.br/'>
        Imersão React da Alura
      </a>
    </p>
  </FooterBase>
)

export default Footer;