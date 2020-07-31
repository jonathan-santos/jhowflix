const fetchData = async (url, data) => {
  const res = await window.fetch(url, data)

  if (res.status >= 400 && res.status <= 600) {
    throw new Error(res.status)
  }

  return await res.json()
}

export {
  fetchData
}
