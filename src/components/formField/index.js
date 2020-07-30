import React from 'react'
import Field, { InputContainer, Input, FloatingLabel } from './styles'

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1)

const FormField = ({ required, value, name, type, onChange, textarea }) => (
  <Field>
    <InputContainer>
      {type === 'color' &&
        <label htmlFor={name}>{capitalizeWord(name)}:</label>
      }

      <Input
        as={textarea ? 'textarea' : ''}
        required={required}
        name={name}
        type={type || 'text'}
        value={value}
        onChange={onChange}
        rows={textarea ? 4 : 0}
      />

      {type !== 'color' &&
        <FloatingLabel className={value ? '.has-text' : ''}>
          {capitalizeWord(name)}
        </FloatingLabel>
      }
    </InputContainer>
  </Field>
)

export default FormField
