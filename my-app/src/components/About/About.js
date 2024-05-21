import React from "react";
import "./About.css";
import headshot from "../../images/headshot.jpg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../../images/github.svg";
import { ReactComponent as EmailIcon } from "../../images/email.svg";
import Logo from "../Logo/Logo";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-content">
				<h1>Hi, I&apos;m Wini</h1>
				<h2>Software Engineer</h2>
				<p>
					Your friendly neighborhood software engineer. I&apos;m currently a senior computer science major at Yale with experience in front
					end and full stack development.
				</p>
				<div className="social-icons">
					<Logo Icon={LinkedInIcon} link="https://www.linkedin.com/in/winiboya" alt="LinkedIn" />
					<Logo Icon={GitHubIcon} link="https://github.com/winiboya" alt="GitHub" />
					<Logo Icon={EmailIcon} link="mailto:waboyure@gmail.com" alt="Email" />
				</div>
			</div>
			<div className="about-image">
				<img src={headshot} alt="Wini" />
			</div>
		</div>
	);
};

export default About;
