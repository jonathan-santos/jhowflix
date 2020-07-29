import React, { useState } from 'react'
import styled from 'styled-components'

import PageDefault from '../../components/pageDefault'
import FormField from '../../components/formField'
import TableViewer from '../../components/tableViewer'
import Button from '../../components/button'
import Category from '../../components/category'

const Form = styled.form`
    border: 1px solid var(--white);
    border-radius: 10px;
    padding: 0.5rem;
`

const NewCategory = () => {
    const initialCategory = {
        name: '',
        description: '',
        color: '#999999'
    }

    const [categories, setCategories] = useState([{ name: 'test', description: 'something', color: '#f00' }])
    const [category, setCategory] = useState(initialCategory)

    const changeCategory = (e) => {
        const { name, value } = e.target
        setCategory({
            ...category,
            [name]: value
        })
    }

    const saveNewCategory = (e) => {
        e.preventDefault()
        setCategories([...categories, category])
        setCategory(initialCategory)
    }

    return (
        <PageDefault>
            <h1 style={{ margin: '0.25rem' }}>Register new category: </h1>

            <Category
                title={category.name || 'Initial Name'}
                color={category.color}
                style={{ marginTop: 0 }}
            />

            <Form onSubmit={saveNewCategory}>
                <FormField
                    required
                    name='name'
                    value={category.name}
                    onChange={changeCategory}
                />

                <FormField
                    name='description'
                    value={category.description}
                    onChange={changeCategory}
                    textarea
                />

                <FormField
                    name='color'
                    type='color'
                    value={category.color}
                    onChange={changeCategory}
                />

                <Button style={{ padding: '0.5rem', backgroundColor: 'var(--black)' }} notMoveable>
                    Register
                </Button>
            </Form>


            {categories.map(cat => (
                <>
                    <Category title={cat.name} color={cat.color} />
                    <br />
                </>
            ))}
        </PageDefault>
    )
}

export default NewCategory