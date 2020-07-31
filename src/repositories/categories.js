import { fetchData } from './utils'
import { BACKEND_URL } from '../config'

const categoriesUrl = `${BACKEND_URL}/categories`

export const getAllCategories = async () => {
  return await fetchData(categoriesUrl)
}

export const getAllCategoriesWithVideos = async () => {
  return await fetchData(`${categoriesUrl}?_embed=videos`)
}

export const saveCategory = async (category) => {
  return await fetchData(categoriesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)
  })
}
