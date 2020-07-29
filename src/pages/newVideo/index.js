import React from 'react'
import { Link } from 'react-router-dom'

import PageDefault from '../../components/pageDefault'

const NewCategory = () => (
    <PageDefault>
        <h1>Register new video</h1>
        <Link to='/new-category'>Register new category</Link>
    </PageDefault>
)

export default NewCategory