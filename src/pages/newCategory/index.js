import React, { useState, useEffect } from 'react'

import Form from './styles'

import PageDefault from '../../components/pageDefault'
import FormField from '../../components/formField'
import Button from '../../components/button'
import Category from '../../components/category'
import Loading from '../../components/loading'

import useForm from '../../hooks/useForm'

const NewCategory = () => {
  const initialCategory = {
    name: '',
    description: '',
    color: '#aa0000'
  }

  const [categories, setCategories] = useState([])
  const { values, handleChange, clearValues } = useForm(initialCategory)

  const getCategories = async () => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://jhowflix.herokuapp.com/categories'
    const res = await window.fetch(URL)
    const categories = await res.json()
    setCategories(categories)
  }

  const saveNewCategory = async () => {
    setCategories([
      ...categories,
      values
    ])

    clearValues()
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <PageDefault>
      <h1 style={{ margin: '0.25rem' }}>Register new category: </h1>

      <Category
        title={values.title || 'Initial Name'}
        color={values.color}
        style={{ marginTop: 0 }}
      />

      <Form onSubmit={saveNewCategory}>
        <FormField
          required
          name='name'
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          name='description'
          value={values.description}
          onChange={handleChange}
          textarea
        />

        <FormField
          name='color'
          type='color'
          value={values.color}
          onChange={handleChange}
        />

        <Button style={{ padding: '0.5rem', backgroundColor: 'var(--black)' }} notMoveable>
          Register
        </Button>
      </Form>

      {categories.length === 0 &&
        <Loading />}

      {categories.map((cat, count) => (
        <React.Fragment key={count}>
          <Category title={cat.title} color={cat.color} />
          <br />
        </React.Fragment>
      ))}
    </PageDefault>
  )
}

export default NewCategory
