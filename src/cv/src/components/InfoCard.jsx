import React from 'react'

const InfoCard = ({
    name,
    icon
}) => {
  return (
    <p>
    <i className={`fa ${icon} fa-fw w3-margin-right w3-large w3-text-teal`} />
    {name}
  </p>
  )
}

export default InfoCard