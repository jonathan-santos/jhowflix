import React from 'react'

const NewCategory = () => (
    <>
        <h1>Register new category</h1>

        <form>
            <label>
                Category Name: 
                <input type="text"/>
            </label>

            <button>
                Register
            </button>
        </form>
    </>
)

export default NewCategory