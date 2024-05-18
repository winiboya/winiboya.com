import "./App.css";
import React, { useState } from "react";

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="App">
			<header className="AppHeader">
				<nav>
					<div className="site-name">
						<a href="#home">winiboya</a>
					</div>
					<ul className="nav-links">
						<li>
							<a href="#about">about</a>
						</li>
						<li>
							<a href="#projects">projects</a>
						</li>
						<li>
							<a href="#resume">resume</a>
						</li>
						<li className="ContactButton">
							<a href="#contact">let&apos;s talk!</a>
						</li>
					</ul>
					<div
						className={`hamburger ${isOpen ? "open" : ""}`}
						onClick={toggleMenu}
					>
						<span className="hamburger-icon">&#9776;</span>
					</div>
				</nav>
			</header>

			<div className={`RightNav ${isOpen ? "open" : ""}`}>
				<ul className="nav-links-mobile">
					<li>
						<a href="#about">about</a>
					</li>
					<li>
						<a href="#projects">projects</a>
					</li>
					<li>
						<a href="#resume">resume</a>
					</li>
					<li>
						<a href="#contact">let&apos;s talk</a>
					</li>
				</ul>
				<div className="close-icon-container" onClick={toggleMenu}>
					<span className="close-icon">&times;</span>
				</div>
			</div>

			{isOpen && <div className="overlay" onClick={toggleMenu}></div>}

			<section>
				<h1>⚠︎</h1>
				<h3>welcome</h3>
				<p>this website is under construction. check back soon!</p>
			</section>

			{/* <section id="home">
				<h1>Home</h1>
				<p>This is the home section.</p>
			</section>

			<section id="about">
				<h2>About</h2>
				<p>This is the about section.</p>
			</section>
			<section id="projects">
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
	);
}

export default App;
