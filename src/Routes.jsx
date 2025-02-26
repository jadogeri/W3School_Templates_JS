import { BrowserRouter, Route, Routes} from "react-router";
import React from 'react'
import GourmetCatering from "../src/gourmet_catering/src/App.js"
// import TestStore from "../components/testcomponent/TestStore.jsx"


const ProjectRoutes = () => {

  return (
	<BrowserRouter >

		<Routes >				
			{/* <Route path="/"  index />  */}
			<Route path="/gourmet_catering" element={ <GourmetCatering />} /> 
		
			 

		</Routes>
	</BrowserRouter>
  )
}



export default ProjectRoutes

