import React, { useState, useEffect } from 'react'

import PageDefault from '../../components/pageDefault'
import FormField from '../../components/formField'
import Button from '../../components/button'
import Video from '../../components/video'
import Loading from '../../components/loading'

import useForm from '../../hooks/useForm'
import { getAllVideos } from '../../repositories/videos'

const NewVideo = () => {
  const initialVideo = {
    title: 'Initial title',
    url: ''
  }

  const [videos, setVideos] = useState([])
  const { values, handleChange, clearValues } = useForm(initialVideo)

  const saveNewVideo = async (e) => {
    e.preventDefault()

    setVideos([
      ...videos,
      values
    ])

    clearValues()
  }

  const getVideos = async () => {
    const allVideos = await getAllVideos()
    setVideos(allVideos.reverse())
  }

  useEffect(() => {
    getVideos()
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
          name='name'
          value={values.name}
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
