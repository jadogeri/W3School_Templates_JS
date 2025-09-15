import React from 'react'

const ImageModal = () => {
  return (
    <div
      id="modal01"
      className="w3-modal w3-black"
      style={{ paddingTop: 0 }}
      onClick={()=>{
        //this.style.display='none'
          document.getElementById("modal01").style.display = "none";      
      }}
    >
      <span className="w3-button w3-black w3-xxlarge w3-display-topright">
        ×
      </span>
      <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" className="w3-image" />
        <p id="caption" />
      </div>
    </div>
  )
}

export default ImageModal