import React from 'react'

const LanguageCard = ({
    width,
    name
}) => {
  return (
    <>
        <p>{name}</p>
        <div className="w3-light-grey w3-round-xlarge">
            <div
            className="w3-round-xlarge w3-teal"
            style={{ height: 24, width: width }}
            />
        </div>
    
    </>
  )
}

export default LanguageCard