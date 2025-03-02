import React from 'react'

const Tag = ({
    className,
    title
}) => {
  return (
    <span className={className}>{title}</span>

  )
}

export default Tag