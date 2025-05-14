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
        <img width={350}
            src={src} alt={alt}
            onClick={()=>{window.open(route,"_blank")}} 
            style={{cursor:"pointer", margin:10}}/>
    </div>
  )
}

export default WebPage

