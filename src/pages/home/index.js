import React from 'react'

import initialData from '../../data/initial-data.json'

import BannerMain from '../../components/bannerMain'
import Carousel from '../../components/carousel'

const Home = () => (
  <>
    <BannerMain
      videoTitle={initialData.categories[0].videos[0].title}
      url={initialData.categories[0].videos[0].url}
      videoDescription='From the album The Getaway'
    />

    {initialData.categories.map((cat, count) => (
        <Carousel
          key={count}
          ignoreFirstVideo={count === 0}
          category={cat}
        />
    ))}
  </>
)

export default Home