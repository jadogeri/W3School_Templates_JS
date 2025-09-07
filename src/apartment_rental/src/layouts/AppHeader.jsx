import w3_open from '../utils/w3_open'

const AppHeader = () => {
  return (
  <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
    <span className="w3-bar-item">Rental</span>
    <a
    //   href="javascript:void(0)"
      className="w3-right w3-bar-item w3-button"
      onClick={()=>{w3_open()}}
    >
      <i className="fa fa-bars" />
    </a>
  </header>
  )
}

export default AppHeader