import { BACKEND_URL } from '../config'

const categoriesUrl = `${BACKEND_URL}/categories`

const fetchData = async (url, data) => {
  const res = await window.fetch(url, data)

  if (res.status >= 400 && res.status <= 600) {
    throw new Error(res.status)
  }

  return await res.json()
}

export const getAllCategories = async () => {
  return await fetchData(categoriesUrl)
}

export const getAllCategoriesWithVideos = async () => {
  return await fetchData(`${categoriesUrl}?_embed=videos`)
}
