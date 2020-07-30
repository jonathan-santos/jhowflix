import React from 'react'
import PropTypes from 'prop-types'

import Field, { InputContainer, Input, FloatingLabel } from './styles'

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1)

const FormField = ({ required, value, name, type, onChange, textarea }) => (
  <Field>
    <InputContainer>
      {type === 'color' &&
        <label htmlFor={name}>{capitalizeWord(name)}:</label>}

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
        </FloatingLabel>}
    </InputContainer>
  </Field>
)

FormField.defaultProps = {
  required: false,
  type: 'text',
  value: '',
  onChange: (e) => {},
  textarea: false
}

FormField.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  textarea: PropTypes.bool
}

export default FormField
