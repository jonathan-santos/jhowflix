import React, { useState, useEffect } from 'react'

import PageDefault from '../../components/pageDefault'
import FormField from '../../components/formField'
import Button from '../../components/button'
import Category from '../../components/category'
import Loading from '../../components/loading'

import useForm from '../../hooks/useForm'
import { getAllCategories, saveCategory } from '../../repositories/categories'

const NewCategory = () => {
  const initialCategory = {
    title: '',
    description: '',
    color: '#aa0000'
  }

  const [categories, setCategories] = useState([])
  const { values, handleChange, clearValues } = useForm(initialCategory)

  const saveNewCategory = async () => {
    await saveCategory(values)

    const newCategories = categories
    newCategories.unshift(values)

    setCategories(newCategories)

    clearValues()
  }

  const getCategories = async () => {
    const allCategories = await getAllCategories()
    setCategories(allCategories)
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

      <form onSubmit={saveNewCategory}>
        <FormField
          required
          name='title'
          value={values.title}
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
          Save
        </Button>
      </form>

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
