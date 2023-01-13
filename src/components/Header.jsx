import logo from '../assets/logo_sport_see.png'
import '../style/Components/Header.css'
import { Link } from 'react-router-dom';

/**
 * Display the header of the app
 * @component
 * @returns {JSX.Element} Header component
 */


function Header() {
    return(
        <header>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <nav>
                <div className="nav-element">Accueil</div>
                <div className="nav-element">Profil</div>
                <div className="nav-element">Réglage</div>
                <div className="nav-element">Communauté</div>
            </nav>
        </header>
    )
}

export default Header;