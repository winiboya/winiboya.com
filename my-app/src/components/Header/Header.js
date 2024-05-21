import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import NavLinks from "./NavLinks";

const Header = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<header className="app-header">
				<nav>
					<div className="site-name">
						<a href="/">winiboya</a>
					</div>
					<NavLinks className="nav-links" />
					<div
						className={`hamburger ${isOpen ? "open" : ""}`}
						onClick={toggleMenu}
					>
						<span className="hamburger-icon">&#9776;</span>
					</div>
				</nav>
			</header>
		</>
	);
};

Header.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	toggleMenu: PropTypes.func.isRequired,
};

export default Header;
