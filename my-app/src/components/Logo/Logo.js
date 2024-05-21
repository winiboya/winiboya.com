import React from "react";
import PropTypes from "prop-types";
import "./Logo.css";

const Logo = ({ Icon, link, alt }) => {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer" className="logo">
			<Icon aria-label={alt} />
		</a>
	);
};

Logo.propTypes = {
	Icon: PropTypes.elementType.isRequired,
	link: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Logo;
