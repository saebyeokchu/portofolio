import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png' 
import LogoSubtitle from '../../assets/images/logo_sub.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUser,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (<>
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/about" className="about-link" >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink to="/contract" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://kr.linkedin.com/'>
                    <FontAwesomeIcon icon={faLinkedin}  color="#4d4d4e" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://kr.linkedin.com/'>
                    <FontAwesomeIcon icon={faGithub}  color="#4d4d4e" />
                </a>
                <a target="_blank" rel='noreferrer' href='https://kr.linkedin.com/'>
                    <FontAwesomeIcon icon={faYoutube}  color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
</>)

export default Sidebar