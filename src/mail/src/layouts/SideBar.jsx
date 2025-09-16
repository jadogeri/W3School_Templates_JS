import React from 'react'
import { w3_close } from '../utils/w3_close'
import { openMail } from '../utils/openMail'
import { myFunc } from '../utils/myFunc'
import Message from '../components/Message'

const SideBar = () => {
  return (
  <nav
    className="w3-sidebar w3-bar-block w3-collapse w3-white w3-animate-left w3-card"
    style={{ zIndex: 3, width: 320 }}
    id="mySidebar"
  >

    <a
      // href="javascript:void(0)"
      className="w3-bar-item w3-button w3-border-bottom w3-large"
    >
      <img
        src="https://www.w3schools.com/images/w3schools.png"
        style={{ width: "60%" }}
      />
    </a>
    <a
      // href="javascript:void(0)"
      onClick={()=>{w3_close()}}
      title="Close Sidemenu"
      className="w3-bar-item w3-button w3-hide-large w3-large"
    >
      Close <i className="fa fa-remove" />
    </a>
    <a
      // href="javascript:void(0)"
      className="w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align"
      onClick={()=>{document.getElementById('id01').style.display='block'}}
    >
      New Message <i className="w3-padding fa fa-pencil" />
    </a>
    <a
      id="myBtn"
      onClick={()=>{myFunc('Demo1')}}
      // href="javascript:void(0)"
      className="w3-bar-item w3-button"
    >
      <i className="fa fa-inbox w3-margin-right" />
      Inbox (3)
      <i className="fa fa-caret-down w3-margin-left" />
    </a>
    <div id="Demo1" className="w3-hide w3-animate-left">
    
    <Message 
      id='Borge' firstTab="firstTab" src="https://www.w3schools.com/w3images/avatar3.png"
      name="Borge Refsnes" subject={<h6>Subject: Remember Me</h6>}
      message="Hello, i just wanted to let you know that i'll be home at..."
      />
    <Message 
      id='Jane'  src="https://www.w3schools.com/w3images/avatar5.png" name="Jane Doe"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
      />
    <Message 
      id='John' src="https://www.w3schools.com/w3images/avatar2.png"
       name="John Doe" message="Welcome!"
      />
    </div>
    <a href="#" className="w3-bar-item w3-button">
      <i className="fa fa-paper-plane w3-margin-right" />
      Sent
    </a>
    <a href="#" className="w3-bar-item w3-button">
      <i className="fa fa-hourglass-end w3-margin-right" />
      Drafts
    </a>
    <a href="#" className="w3-bar-item w3-button">
      <i className="fa fa-trash w3-margin-right" />
      Trash
    </a>
  </nav>
  )
}

export default SideBar