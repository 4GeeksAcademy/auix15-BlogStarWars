import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DetailCharacter from "./views/detailCharacter";
import DetailPlanet from "./views/detailPlanet";
import DetailVehicles from "./views/detailVehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/detail-characters/:theid" element={<DetailCharacter />}/>
						<Route path="/detail-planets/:theid" element={<DetailPlanet />} />
						<Route path="/detail-vehicles/:theid" element={<DetailVehicles />} />
						<Route path="*" element={<h1>Not found!</h1>} />

					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
