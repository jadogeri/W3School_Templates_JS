import { BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import GourmetCatering from "./gourmet_catering/src/App.js"
import ComingSoon from "./coming_soon/src/App.js"
import Band from "./band/src/App.js"
import Architect from "./architect/src/App.js"
import Art from "./art/src/App.js"
import PhotoPortfolio from "./photo_portfolio/src/App.js"
import BlackAndWhitePhoto from "./black_and_white_photo/src/App.js"
import Parallax from "./parallax/src/App.js"
import Blog from "./blog/src/App.js"
import FoodBlog from "./food_blog/src/App.js"
import FashionBlog from "./fashion_blog/src/App.js"
import TravelAgency from "./travel_agency/src/App.js"
import Analytics from "./analytics/src/App.js"
import PizzaRestaurant from "./pizza_restaurant/src/App.js"
import Screen50 from "./screen_50/src/App.js"
import StartPage from "./start_page/src/App.js"
import Cafe from "./cafe/src/App.js"
import CV from "./cv/src/App.js"
import ClothingStore from "./clothing_store/src/App.js"
import DarkPortfolio from "./dark_portfolio/src/App.js"
import Travel from "./travel/src/App.js"
import WeddingInvitation from "./wedding_invitation/src/App.js"
import ModalRestaurant from "./modal_restaurant/src/App.js"
import Photo from "./photo/src/App.js"
import PeoplePortfolio from "./people_portfolio/src/App.js"
import AppLaunch from "./app_launch/src/App.js"
import PeoplePortfolio2 from "./people_portfolio_2/src/App.js"
import ApartmentRental from "./apartment_rental/src/App.js"
import Hotel from "./hotel/src/App.js"
import HouseDesign from "./house_design/src/App.js"
import InteriorDesign from "./interior_design/src/App.js"
import Mail from "./mail/src/App.js"
import Marketing from "./marketing/src/App.js"
import MarketingWebsite from "./marketing_website/src/App.js"
import NaturePortfolio from "./nature_portfolio/src/App.js"
import SocialMedia from "./social_media/src/App.js"
import StartUp from "./startup/src/App.js"
import WebPage from "./web_page/src/App.js"
























//https://dev.to/jemmycodes/creating-an-image-slider-with-the-usestate-hook-3c8i

import Home from "./Home.jsx"
import NoPage from "./NoPage.jsx";
const ProjectRoutes = () => {

  return (
	<BrowserRouter basename="/W3School_Templates_JS" 
	>
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
			<Route path="/app_launch" element={<AppLaunch />} />
			<Route path="/people_portfolio_2" element={<PeoplePortfolio2 />} />
			<Route path="/apartment_rental" element={<ApartmentRental />} />
			<Route path="/hotel" element={<Hotel />} />
			<Route path="/house_design" element={<HouseDesign />} />
			<Route path="/interior_design" element={<InteriorDesign />} />
			<Route path="/mail" element={<Mail />} />
			<Route path="/marketing" element={<Marketing />} />
			<Route path="/marketing_website" element={<MarketingWebsite />} />
			<Route path="/nature_portfolio" element={<NaturePortfolio />} />
			<Route path="/social_media" element={<SocialMedia />} />
			<Route path="/startup" element={<StartUp />} />
			<Route path="/web_page" element={<WebPage />} />






			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

