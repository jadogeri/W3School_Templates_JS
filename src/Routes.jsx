import { BrowserRouter, Route, Routes} from "react-router";
import React from 'react'
import GourmetCatering from "../src/gourmet_catering/src/App.js"
import ComingSoon from "../src/coming_soon/src/App.js"

import Home from "./Home.jsx"

const ProjectRoutes = () => {

  return (
	<BrowserRouter >

		<Routes >				
			<Route path="/" element={<Home/>} index /> 
			<Route path="/gourmet_catering" element={ <GourmetCatering />} /> 
			<Route path="/coming_soon" element={ <ComingSoon />} /> 

		
			 

		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

