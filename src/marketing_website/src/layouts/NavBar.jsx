import {openNav} from "../utils/openNav"
const NavBar = () => {
  return (
    <nav>
    <div className="w3-bar w3-theme-d2 w3-left-align">
      <a
        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"
       // href="javascript:void(0);"
        onClick={()=>{openNav()}}
      >
        <i className="fa fa-bars" />
      </a>
      <a href="#" className="w3-bar-item w3-button w3-teal">
        <i className="fa fa-home w3-margin-right" />
        Logo
      </a>
      <a
        href="#team"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Team
      </a>
      <a
        href="#work"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Work
      </a>
      <a
        href="#pricing"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Price
      </a>
      <a
        href="#contact"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Contact
      </a>
      <div className="w3-dropdown-hover w3-hide-small">
        <button className="w3-button" title="Notifications">
          Dropdown <i className="fa fa-caret-down" />
        </button>
        <div className="w3-dropdown-content w3-card-4 w3-bar-block">
          <a href="#" className="w3-bar-item w3-button">
            Link
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Link
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Link
          </a>
        </div>
      </div>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal"
        title="Search"
      >
        <i className="fa fa-search" />
      </a>
    </div>
    </nav>
  )
}

export default NavBar