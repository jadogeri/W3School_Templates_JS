import { Link } from 'react-router-dom'


const WebPage = ({
    src,
    alt,
    route,
    className,
    style
}) => {

  return (
    <Link to={window.open(route,"_blank")} >
       <div className={className} style={style}>
        <img width={350}
            src={src} alt={alt}
            style={{cursor:"pointer", margin:10}}/>
    </div>
    
    
    </Link>
 
  )
}

export default WebPage

          //<Link to="/credits" //className="w3-bar-item w3-button w3-padding-large" >CREDITS</Link>
