import React from 'react'

import initialData from '../../data/initial-data.json'

import PageDefault from '../../components/pageDefault'
import BannerMain from '../../components/bannerMain'
import Carousel from '../../components/carousel'

const Home = () => (
  <PageDefault noPadding>
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
  </PageDefault>
)

export default Home
