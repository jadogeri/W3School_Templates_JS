import React from 'react';

const InputField = ({
    label,
    type,
    name
}) => {
  return (
    <div className="w3-section">
    <label>
      <b>{label}</b>
    </label>
    <input
      className="w3-input w3-border"
      type={type}
      required=""
      name={name}
    />
  </div>
  );
}

export default InputField;
