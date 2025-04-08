import { BrowserRouter, Route, Routes} from "react-router";
import React from 'react'
import GourmetCatering from "../src/gourmet_catering/src/App.js"
import ComingSoon from "../src/coming_soon/src/App.js"
import Band from "../src/band/src/App.js"
import Architect from "../src/architect/src/App.js"
import Art from "../src/art/src/App.js"
import PhotoPortfolio from "../src/photo_portfolio/src/App.js"
import BlackAndWhitePhoto from "../src/black_and_white_photo/src/App.js"
import Parallax from "../src/parallax/src/App.js"
import Blog from "../src/blog/src/App.js"
import FoodBlog from "../src/food_blog/src/App.js"
import FashionBlog from "../src/fashion_blog/src/App.js"
import TravelAgency from "../src/travel_agency/src/App.js"
import Analytics from "../src/analytics/src/App.js"
import PizzaRestaurant from "../src/pizza_restaurant/src/App.js"
import Screen50 from "../src/screen_50/src/App.js"
import StartPage from "../src/start_page/src/App.js"












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
			<Route path="/parallax" element={ <Parallax />} />
			<Route path="/blog" element={ <Blog />} />
			<Route path="/food_blog" element={ <FoodBlog />} />
			<Route path="/fashion_blog" element={ <FashionBlog />} />
			<Route path="/travel_agency" element={ <TravelAgency />} />
			<Route path="/analytics" element={<Analytics />} />
			<Route path="/pizza_restaurant" element={<PizzaRestaurant />} />
			<Route path="/screen_50" element={<Screen50 />} />
			<Route path="/start_page" element={<StartPage />} />




		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

