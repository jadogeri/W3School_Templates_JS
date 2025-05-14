import React from 'react'
import WebPage from './WebPage';
import {websiteArray } from './websites';
import SearchBar from './SearchBar';
import { useState } from 'react';

const Home = () => {
  const [websites, setWebsites] = useState(websiteArray);
  const [input, setInput] = useState("");

  const handleInputChange = (event)=>{
    const { value } = event.target;
    console.log("value ====",value)
    setInput(value);

  }
  return (
<>

<SearchBar  value={input}
                 onChange={handleInputChange}/>
                 <div className="w3-container w3-center" >
    {websites.map((website, index)=>{
      
      if(website.alt.toLowerCase().includes(input.toLowerCase()) || input.trim().length ===0)
      return <>
      <WebPage 
                alt={website.alt} src={website.src} route={website.route} key={index} 
                style={{margin:10, display:"inline"}}
              />
              </>

    })}</div>
    <>{input}</>
</>

  )
}

export default Home
