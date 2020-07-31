import { fetchData } from './utils'
import { BACKEND_URL } from '../config'

const videosUrl = `${BACKEND_URL}/videos`

export const getAllVideos = async () => {
  return await fetchData(videosUrl)
}
