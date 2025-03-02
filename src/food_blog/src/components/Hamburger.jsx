import React from 'react'
import { w3_open } from '../utils/w3_open'

const Hamburger = () => {
  return (
    <div className="w3-button w3-padding-16 w3-left"   onClick={()=>{w3_open()}}
    >
    ☰
    </div>
  )
}

export default Hamburger