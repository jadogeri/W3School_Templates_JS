import React from 'react'


const WebPage = ({
    src,
    alt,
    route,
    className,
    style
}) => {

  return (
    <div className={className} style={style}>
        <img 
            src={src} alt={alt}
            onClick={()=>{window.open(route,"_blank")}} style={{cursor:"pointer"}}/>
    </div>
  )
}

export default WebPage

/**
 * 
 




import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>Home

        <img src="https://www.w3schools.com/w3css/img_temp_architect.jpg" alt="architect"
             onClick={()=>{navigate("/architect")}} style={{cursor:"pointer"}}/>
 */