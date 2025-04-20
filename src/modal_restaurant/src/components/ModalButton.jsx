import React from 'react'

const ModalButton = ({
    name,
    id
}) => {
  return (
    <p>
    <button
      onClick={()=>{document.getElementById(id).style.display='block'}}
      className="w3-button w3-black"
    >
      {name}
    </button>
  </p>
  )
}

export default ModalButton