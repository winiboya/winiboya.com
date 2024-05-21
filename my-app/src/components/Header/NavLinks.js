import React from "react";
import PropTypes from "prop-types";


const NavLinks = ({ className }) => {
	return (
		<ul className={className}>
			<li>
				<a href="#about">About</a>
			</li>
			<li>
				<a href="#projects">Projects</a>
			</li>
			<li>
				<a href="#resume">Resume</a>
			</li>
			<li className="contact-button">
				<a href="#contact">Let&apos;s Talk!</a>
			</li>
		</ul>
	);
};

NavLinks.propTypes = {
	className: PropTypes.string,
};

export default NavLinks;
