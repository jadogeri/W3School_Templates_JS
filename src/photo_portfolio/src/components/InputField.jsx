import React from 'react';

const InputField = ({
    label,
    name

}) => {
  return (
    <div className="w3-section">
      <label>{label}</label>
      <input
        className="w3-input w3-border"
        type="text"
        required=""
        name={name}
      />
    </div>
  );
}

export default InputField;
