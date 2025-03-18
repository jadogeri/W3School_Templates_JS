import React from 'react';

const Country = ({
    name,
    value
}) => {
  return (
    <tr>
        <td>{name}</td>
        <td>{value}</td>
    </tr>
  );
}

export default Country;
