import "./App.css";
import React, { useState } from "react";
import MobileMenu from "./components/Header/MobileMenu";
import Header from "./components/Header/Header";
import About from "./components/About/About";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="app">
			<Header isOpen={isOpen} toggleMenu={toggleMenu} />
			<MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />

			<div className="body">
				<About />

				{/* <section id="projects">
					<h2>Projects</h2>
					<p>This is the projects section.</p>
				</section>
				<section id="resume">
					<h2>Resume</h2>
					<p>This is the resume section.</p>
				</section>
				<section id="contact">
					<h2>Contact</h2>
					<p>This is the contact section.</p>
				</section> */}
			</div>
		</div>
	);
}

export default App;
