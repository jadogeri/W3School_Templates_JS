import React from 'react'
import "../App.css"
import SideBarItem from "../components/SideBarItem"


const SideBar = () => {
  return (
    <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
    {/* Avatar image in top left corner */}
    <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{ width: "100%" }}  alt="img"/>
    <SideBarItem 
      href="#" name="HOME" icon="fa-home" color="w3-black"
    
    />
    <SideBarItem 
      href="#about" name="ABOUT" icon="fa-user" color="w3-hover-black"
    
    />
    <SideBarItem 
      href="#photos" name="PHOTOS" icon="fa-eye" color="w3-hover-black"
    
    />
    <SideBarItem 
      href="#contact  " name="CONTAcT" icon="fa-envelope" color="w3-hover-black"
    
    />
  </nav>
  )
}

export default SideBar