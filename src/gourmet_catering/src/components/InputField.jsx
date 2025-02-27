import React from 'react'

const InputField = ({
    type,
    name,
    placeholder,
    defaultValue,
    required

}) => {
  return (
    <p>
    <input
      className="w3-input w3-padding-16"
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