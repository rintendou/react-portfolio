import "../about-me/about-me.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCss3,
	faGit,
	faHtml5,
	faJava,
	faJsSquare,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

const AboutMe = () => {
	return (
		<div className="container about-page">
			<div className="about-me">
				<h1>About me</h1>

				<p>
					I'm an ambitious student living in New York City, looking
					for a Summer 2023 Internship as a Software Engineer. I look
					forward to working with the latest technologies and
					practices on challenging and diverse projects, as well as
					meeting and working with new people!
				</p>

				<p>
					Since my earliest memory, I remember being on a computer
					which really fascinated young me. As a result, I knew at an
					early age that I wanted to pursue a career that related to
					technology and using computers to harness my imagination.
				</p>

				<p>
					Throughout my college career, I had the opportunity to meet
					wonderful people, allowing me to gain further insight on the
					vast spectrum of technologies out there and what you were
					capable of doing with them.
				</p>
			</div>
		</div>
	);
};

export default AboutMe;
