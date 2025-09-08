import { Link } from "react-router-dom"


const WebPage = ({
    src,
    alt,
    route,
    className,
    style
}) => {

  return (
    <Link className={className} style={style} to={route} target="_blank">
        <img width={350}
            src={src} alt={alt}
            style={{cursor:"pointer", margin:10}}/>
    </Link>
  )
}

export default WebPage

