import React from "react";
import NavLinks from "./NavLinks";
import PropTypes from "prop-types";
import "./Header.css";


const MobileMenu = ({ isOpen, toggleMenu }) => {
	return (
		<>
			<div className={`right-nav ${isOpen ? "open" : ""}`}>
				<NavLinks className="nav-links-mobile" />
				<div className="close-icon-container" onClick={toggleMenu}>
					<span className="close-icon">&times;</span>
				</div>
			</div>
			{isOpen && <div className="overlay" onClick={toggleMenu}></div>}
		</>
	);
};

MobileMenu.propTypes = {
	isOpen: PropTypes.bool,
	toggleMenu: PropTypes.func,
};

export default MobileMenu;
