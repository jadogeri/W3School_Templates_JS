import React from 'react'

const SkillCard = ({
    name,
    width,
    level
}) => {
  return (
    <>
        <p>{name}</p>
        <div className="w3-light-grey w3-round-xlarge w3-small">
            <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: width }}
              >
                {level}
            </div>
        </div>
    
    </>
  )
}

export default SkillCard