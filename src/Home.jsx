import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>Home

        <img src="https://www.w3schools.com/w3css/img_temp_gourmet_catering.jpg" alt="gourmet catering"/>
    </div>
  )
}

export default Home