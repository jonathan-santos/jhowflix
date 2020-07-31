import React from 'react'
import PropTypes from 'prop-types'

import Field, { InputContainer, Input, FloatingLabel, Options } from './styles'

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1)

const FormField = ({ required, value, name, type, onChange, textarea, label, options }) => (
  <Field>
    <InputContainer>
      {type === 'color' &&
        <label htmlFor={name}>{label || capitalizeWord(name)}:</label>}

      {options.length > 0
        ? <Options
          required={required}
          name={name}
          value={value}
          onChange={onChange}>
          <option disabled value={0}>Select a option</option>
          {options.map((option, count) => (
            <option value={option.id} key={count}>{option.title}</option>
          ))}
        </Options>
        : <Input
          as={textarea ? 'textarea' : ''}
          required={required}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={onChange}
          rows={textarea ? 4 : 0}
        />}

      {(type !== 'color' && options.length === 0) &&
        <FloatingLabel className={value ? '.has-text' : ''}>
          {label || capitalizeWord(name)}
        </FloatingLabel>}
    </InputContainer>
  </Field>
)

FormField.defaultProps = {
  required: false,
  type: 'text',
  value: '',
  onChange: (e) => {},
  textarea: false,
  options: [],
  label: ''
}

FormField.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  textarea: PropTypes.bool,
  options: PropTypes.array,
  label: PropTypes.string
}

export default FormField
