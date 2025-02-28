import { BrowserRouter, Route, Routes} from "react-router";
import React from 'react'
import GourmetCatering from "../src/gourmet_catering/src/App.js"
import ComingSoon from "../src/coming_soon/src/App.js"
import Band from "../src/band/src/App.js"
import Architect from "../src/architect/src/App.js"
import Art from "../src/art/src/App.js"
import PhotoPortfolio from "../src/photo_portfolio/src/App.js"
import BlackAndWhitePhoto from "../src/black_and_white_photo/src/App.js"




//https://dev.to/jemmycodes/creating-an-image-slider-with-the-usestate-hook-3c8i

import Home from "./Home.jsx"
const ProjectRoutes = () => {

  return (
	<BrowserRouter >
		<Routes >				
			<Route path="/" element={<Home/>} index /> 
			<Route path="/gourmet_catering" element={ <GourmetCatering />} /> 
			<Route path="/coming_soon" element={ <ComingSoon />} /> 
			<Route path="/band" element={ <Band />} /> 
			<Route path="/architect" element={ <Architect />} /> 
			<Route path="/art" element={ <Art />} /> 
			<Route path="/photo_portfolio" element={ <PhotoPortfolio />} /> 		
			<Route path="/black_and_white_photo" element={ <BlackAndWhitePhoto />} />
		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

