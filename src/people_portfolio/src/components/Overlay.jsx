import React from 'react'
import { w3_close } from "../utils/w3_close"

const Overlay = () => {
  return (
    <div
    className="w3-overlay w3-hide-large w3-animate-opacity"
    onClick={()=>{w3_close()}}
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />
  )
}

export default Overlay