import React from 'react'
import WebPage from './WebPage';
import { websites } from './websites';

const Home = () => {
  return (

    websites.map((website)=>{
      return <WebPage 
                alt={website.alt} src={website.src} route={website.route}
              />

    })
  )
}

export default Home