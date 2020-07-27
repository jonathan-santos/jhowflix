import React from 'react'

import initialData from './data/initial-data.json'

import Menu from './components/menu'
import BannerMain from './components/bannerMain'
import Carousel from './components/carousel'
import Footer from './components/footer'

const App = () => (
  <div className='App'>
    <Menu />

    <BannerMain
      videoTitle={initialData.categories[0].videos[0].title}
      url={initialData.categories[0].videos[0].url}
      videoDescription='What is Front-End?'
    />

    <Carousel
      ignoreFirstVideo
      category={initialData.categories[0]}
    />

    <Footer />
  </div>
)

export default App