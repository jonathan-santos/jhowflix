import React, { useState, useEffect } from 'react'

import PageDefault from '../../components/pageDefault'
import BannerMain from '../../components/bannerMain'
import Carousel from '../../components/carousel'
import Loading from '../../components/loading'

import { getAllCategoriesWithVideos } from '../../repositories/categories'

const Home = () => {
  const [categories, setCategories] = useState([])
  const [error, setError] = useState(0)

  const getCategoriesWithVideos = async () => {
    try {
      const categoriesWithVideos = await getAllCategoriesWithVideos()
      setCategories(categoriesWithVideos)
    } catch (err) {
      setError(parseInt(err.message))
    }
  }

  useEffect(() => {
    getCategoriesWithVideos()
  }, [])

  return (
    <PageDefault noPadding error={error}>
      {categories.length === 0
        ? <Loading />
        : <>
          <BannerMain
            videoTitle={categories[0].videos[0].title}
            url={categories[0].videos[0].url}
            videoDescription='From the album The Getaway'
          />

          {categories.map((cat, count) => (
            <Carousel
              key={count}
              ignoreFirstVideo={count === 0}
              category={cat}
            />
          ))}
        </>}
    </PageDefault>
  )
}

export default Home
