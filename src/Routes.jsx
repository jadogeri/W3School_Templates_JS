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
import Cafe from "../src/cafe/src/App.js"
import CV from "../src/cv/src/App.js"
import ClothingStore from "../src/clothing_store/src/App.js"
import DarkPortfolio from "../src/dark_portfolio/src/App.js"
import Travel from "../src/travel/src/App.js"
import WeddingInvitation from "../src/wedding_invitation/src/App.js"
import ModalRestaurant from "../src/modal_restaurant/src/App.js"
import Photo from "../src/photo/src/App.js"
import PeoplePortfolio from "../src/people_portfolio/src/App.js"
import PeoplePortfolio2 from "../src/people_portfolio_2/src/App.js"














//https://dev.to/jemmycodes/creating-an-image-slider-with-the-usestate-hook-3c8i

import Home from "./Home.jsx"
import NoPage from "./NoPage.jsx";
const ProjectRoutes = () => {

  return (
	<BrowserRouter basename="/W3School_Templates_JS" >
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
			<Route path="/cafe" element={ <Cafe />} />
			<Route path="/blog" element={ <Blog />} />
			<Route path="/food_blog" element={ <FoodBlog />} />
			<Route path="/fashion_blog" element={ <FashionBlog />} />
			<Route path="/travel_agency" element={ <TravelAgency />} />
			<Route path="/cv" element={ <CV />} />
			<Route path="/analytics" element={<Analytics />} />
			<Route path="/clothing_store" element={<ClothingStore />} />
			<Route path="/pizza_restaurant" element={<PizzaRestaurant />} />
			<Route path="/screen_50" element={<Screen50 />} />
			<Route path="/start_page" element={<StartPage />} />	
			<Route path="/dark_portfolio" element={<DarkPortfolio />} />
			<Route path="/travel" element={<Travel />} />
			<Route path="/wedding_invitation" element={<WeddingInvitation />} />
			<Route path="/modal_restaurant" element={<ModalRestaurant />} />
			<Route path="/photo" element={<Photo />} />
			<Route path="/people_portfolio" element={<PeoplePortfolio />} />
			<Route path="/people_portfolio_2" element={<PeoplePortfolio2 />} />
			<Route path="*" element={<NoPage />} />








		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

