import React, { useState } from 'react'

import FormField from '../../components/formField'

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
        <>
            <h1>Register new category: {category.name || 'Initial Name'}</h1>

            <form onSubmit={saveNewCategory} style={{ border: `1px solid ${category.color}` }}>
                <FormField
                    required
                    name='name'
                    placeholder='Type the category name'
                    value={category.name}
                    onChange={changeCategory}
                />

                <FormField
                    name='description'
                    placeholder='Type the category description'
                    value={category.description}
                    onChange={changeCategory}
                    textarea
                />

                <FormField
                    name='color'
                    type='color'
                    placeholder='Type the category color'
                    value={category.color}
                    onChange={changeCategory}
                />

                <button>
                    Register
                </button>
            </form>

            <ul>
                {categories.map((category, count) => (
                    <li key={count}>{category.name}, {category.description}, {category.color}</li>
                ))}
            </ul>
        </>
    )
}

export default NewCategory