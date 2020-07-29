import React from 'react'

const FormField = ({ required, value, name, type, placeholder, onChange, textarea }) => (
    <div>
        <label htmlFor={name}>{name}:</label>

        {textarea ?
            <textarea
                required={required}
                name={name}
                type={type || 'text'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            :
            <input
                required={required}
                name={name}
                type={type || 'text'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        }
    </div>
)

export default FormField