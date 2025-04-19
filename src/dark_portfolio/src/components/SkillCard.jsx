import React from 'react'

const SkillCard = ({
    name,
    width
}) => {
  return (
    <>
      <p className="w3-wide">{name}</p>
      <div className="w3-white">
        <div className="w3-dark-grey" style={{ height: 28, width: width }} />
      </div>

    </>
  )
}

export default SkillCard