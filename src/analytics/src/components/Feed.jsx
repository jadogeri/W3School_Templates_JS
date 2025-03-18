import React from 'react';

const Feed = ({
    className,
    type,
    value
}) => {
  return (
    <tr>
        <td>
            <i className={className} />
        </td>
            <td>{type}</td>
        <td>
            <i>{value}</i>
        </td>
    </tr>
  );
}

export default Feed;
