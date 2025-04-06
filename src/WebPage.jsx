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
        <img width={400}
            src={src} alt={alt}
            onClick={()=>{window.open(route,"_blank")}} style={{cursor:"pointer"}}/>
    </div>
  )
}

export default WebPage

