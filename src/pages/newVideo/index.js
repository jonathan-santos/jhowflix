import React, { useState, useEffect } from 'react'

import PageDefault from '../../components/pageDefault'
import FormField from '../../components/formField'
import Button from '../../components/button'
import Video from '../../components/video'
import Loading from '../../components/loading'

import useForm from '../../hooks/useForm'
import { getAllVideos, saveVideo } from '../../repositories/videos'
import { getAllCategories } from '../../repositories/categories'

const NewVideo = () => {
  const initialVideo = {
    title: '',
    url: '',
    categoryId: 0
  }

  const [videos, setVideos] = useState([])
  const [categories, setCategories] = useState([])
  const { values, handleChange, clearValues } = useForm(initialVideo)

  const saveNewVideo = async (e) => {
    e.preventDefault()

    const newVideo = values

    if (typeof (values.categoryId) === 'string') {
      newVideo.categoryId = parseInt(newVideo.categoryId)
    }

    if (newVideo.categoryId === 0) {
      newVideo.categoryId = 1
    }

    saveVideo(values)

    const newVideos = videos
    newVideos.unshift(values)

    setVideos(newVideos)

    clearValues()
  }

  const getVideos = async () => {
    const allVideos = await getAllVideos()
    setVideos(allVideos.reverse())
  }

  const getCategories = async () => {
    const allCategories = await getAllCategories()
    setCategories(allCategories)
  }

  useEffect(() => {
    getVideos()
    getCategories()
  }, [])

  return (
    <PageDefault>
      <h1 style={{ margin: '0.25rem' }}>Register new video: </h1>

      {values.url &&
        <Video
          title={values.title}
          url={values.url}
          style={{ marginTop: 0 }}
        />}

      <form onSubmit={saveNewVideo}>
        <FormField
          required
          name='url'
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          required
          name='title'
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          required
          options={categories.map(cat => ({ id: cat.id, title: cat.title }))}
          name='categoryId'
          value={String(values.categoryId)}
          onChange={handleChange}
        />

        <Button style={{ padding: '0.5rem', backgroundColor: 'var(--black)' }} notMoveable>
          Save
        </Button>
      </form>

      {videos.length === 0 &&
        <Loading />}

      {videos.map((vid, count) => (
        <React.Fragment key={count}>
          <Video
            title={vid.title}
            url={vid.url}
            categoryColor='red'
          />

          <br />
        </React.Fragment>
      ))}
    </PageDefault>
  )
}

export default NewVideo
