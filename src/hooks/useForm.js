import { useState } from 'react'

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (e) => {
    e.preventDefault()
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    })
  }

  const clearValues = () => {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    clearValues
  }
}

export default useForm
