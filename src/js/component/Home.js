import React from "react";
import { Container } from "./Container.js";
import { Foot } from "./Foot.js";
import { Navbar } from "./Navbar.js";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Container />
			<Foot />
		</div>
	);
};

export default Home;
