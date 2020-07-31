import { fetchData } from './utils'
import { BACKEND_URL } from '../config'

const videosUrl = `${BACKEND_URL}/videos`

export const getAllVideos = async () => {
  return await fetchData(videosUrl)
}

export const saveVideo = async (video) => {
  return await fetchData(videosUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(video)
  })
}
