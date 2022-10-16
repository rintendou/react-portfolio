import './sidebar.scss'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            {/* Nav Bar icons, all are in SVG format. */}
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="$4d4d4w" />

                </NavLink>
                <NavLink className="about-me" exact="true" activeclassname="active" to="/about">
                    <FontAwesomeIcon icon={faUserAlt} color="$4d4d4w" />

                </NavLink>
                <NavLink className="contact-me" exact="true" activeclassname="active" to="/contacts">
                    <FontAwesomeIcon icon={faEnvelope} color="$4d4d4w" />

                </NavLink>
            </nav>

            {/* Icons for LinkedIn & GitHub */}
            <ul>
                <li>
                    <a href='https://www.linkedin.com/in/dchen8102/'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>

                <li>
                    <a href='https://github.com/rintendou'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar