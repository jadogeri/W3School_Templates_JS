import React from 'react'

const InputField = ({
    type,
    name,
    placeholder,
    defaultValue,
    required,
    className

}) => {
  return (
    <p>
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      required={required}
      name={name}
      defaultValue={defaultValue}
    />
  </p>
  )
}

export default InputField